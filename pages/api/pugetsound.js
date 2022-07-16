// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler (req, res) {
  const { stop_id: stopId } = req.query
  const routeIds = req.query.route_ids?.split(',')
  const rawData = await fetch(`https://api.pugetsound.onebusaway.org/api/where/arrivals-and-departures-for-stop/${stopId}.json?key=TEST`)
  const { data } = await rawData.json()
  console.log(data)
  const outData = data?.entry?.arrivalsAndDepartures
    .filter(e => routeIds ? routeIds?.includes(e.routeId) : true)
    .map(e => ({
      routeName: e.routeShortName,
      departureTime: e.predicted ? e.predictedDepartureTime : e.scheduledDepartureTime,
      realtime: e.predicted,
      routeId: e.routeId,
      headsign: e.tripHeadsign
    }))
  res.status(200).json(outData)
}
