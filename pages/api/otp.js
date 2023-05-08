import {
  differenceInMinutes,
  differenceInSeconds,
  fromUnixTime,
} from "date-fns";
import { request, gql } from "graphql-request";

const query = gql`
  query ($stopId: String!) {
    stop(id: $stopId) {
      stoptimesWithoutPatterns {
        realtimeDeparture
        departureDelay
        realtime
        realtimeState
        serviceDay
        headsign
        trip {
          routeShortName
          tripHeadsign
          route {
            gtfsId
          }
          directionId
        }
      }
    }
  }
`;

const endpoint =
  "https://sound-transit-otp.ibi-transit.com/otp/routers/default/index/graphql";

const config = {
  pages: [
    {
      rows: [
        {
          cols: [
            {
              type: "basic",
              routeId: "kcm:100252",
              stopId: "kcm:36940",
              halfWidth: true,
            },
            {
              type: "basic",
              routeId: "kcm:100252",
              stopId: "kcm:16430",
              halfWidth: true,
            },
          ],
        },
        {
          cols: [
            {
              type: "basic",
              routeId: "kcm:100225",
              stopId: "kcm:36940",
              halfWidth: true,
            },
            {
              type: "basic",
              routeId: "kcm:100225",
              stopId: "kcm:16430",
              halfWidth: true,
            }
          ],
        },
      ],
    },
  ],
};

const transformResponse = (response, routeId) => {
  const stopTimes = response.stop.stoptimesWithoutPatterns;
  const filteredStopTimes = stopTimes.filter(
    (st) => st.trip.route.gtfsId === routeId
  );
  const transformedStopTimes = filteredStopTimes.map((st) => ({
    realtime: st.realtime,
    routeShortName: st.trip.routeShortName,
    directionId: st.trip.directionId,
    mins: differenceInMinutes(
      fromUnixTime(st.realtimeDeparture + st.serviceDay),
      new Date()
    ),
    delayMins: Math.round(st.departureDelay / 60),
  }));
  return transformedStopTimes;
};

const processRows = async (row) => ({
  cols: await Promise.all(
    row.cols.map(async (col) => {
      const dataForRow = await request(endpoint, query, {
        stopId: col.stopId,
      });
      return {
        ...col,
        data: transformResponse(dataForRow, col.routeId),
      };
    })
  ),
});

export default async function handler(req, res) {
  console.log("request");
  const outputData = await Promise.all(
    config.pages.map(async (page) => ({
      ...page,
      rows: await Promise.all(page.rows.map(processRows)),
    }))
  );
  // const results = await request(endpoint, query, { stopId });
  res.status(200).json({ pages: outputData });
}
