import useSWR from 'swr'

const fetcher = (...args) => fetch(...args).then(res => res.json())

const useStopTimes = (stopId, routeIds) => {
  const url = `/api/pugetsound?stop_id=${stopId}&route_ids=${routeIds.join(',')}`
  const { data } = useSWR(url, fetcher, { refreshInterval: 30000 })
  return data
}

const minutesUntil = (millis) => Math.round((millis - ((new Date()).getTime())) / 1000 / 60)

export { fetcher, useStopTimes, minutesUntil }
