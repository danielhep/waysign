import useSWR from 'swr'

const fetcher = (...args) => fetch(...args).then(res => res.json())

async function useGrabData (data) {
  const stopIdsWithRoutes = data.reduce((prev, cur) => {
    if (prev[cur.stopId]) {
      prev[cur.stopId].push(cur.routeId)
    } else {
      prev[cur.stopId] = [cur.routeId]
    }
    return prev
  }, [])
}

export { useGrabData }
