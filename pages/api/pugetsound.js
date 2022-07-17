// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const API_KEY = process.env.NEXT_PUGETSOUND_API_KEY
export default async function handler (req, res) {
  const { stop_id: stopId } = req.query
  const routeIds = req.query.route_ids?.split(',')
  const rawData = await fetch(
    `https://api.pugetsound.onebusaway.org/api/where/arrivals-and-departures-for-stop/${stopId}.json?key=${API_KEY}&minutesBefore=1&minutesAfter=60`
  )
  const { data } = await rawData.json()
  const outData = data?.entry?.arrivalsAndDepartures
    .filter(e => routeIds ? routeIds?.includes(e.routeId) : true)
    .map(e => ({
      routeName: e.routeShortName,
      departureTime: e.predicted ? e.predictedDepartureTime : e.scheduledDepartureTime,
      realtime: e.predicted,
      routeId: e.routeId,
      headsign: e.tripHeadsign,
      tripId: e.tripId
    }))
  res.status(200).json(outData)
}
