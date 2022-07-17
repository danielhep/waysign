import classNames from 'classnames'
import useSWR from 'swr'
import ArrivalTime from './ArrivalTime'

const fetcher = (...args) => fetch(...args).then(res => res.json())

const minutesUntil = (millis) => Math.round((millis - ((new Date()).getTime())) / 1000 / 60)

export default function StopRouteTimes ({ stopId, routeId, small }) {
  const { data } = useSWR(`/api/pugetsound?stop_id=${stopId}&route_ids=${routeId}`, fetcher, { refreshInterval: 30000 })
  const destinations = [...new Set(data?.map(d => d.headsign))]
  return (
    <>
      {
        destinations?.map(dest => (
          <div key={dest} className={classNames('flex ml-4 ', { 'flex-col': !small, 'items-center justify-between': small })}>
            <div>
              <p className='text-4xl'>{dest}</p>
            </div>
            <span className='mt-4 flex gap-x-12'>
              {
                data.filter(d => d.headsign === dest).map((d, i) => (
                  i <= 4 && <ArrivalTime realTime={d.realtime} time={minutesUntil(d.departureTime)} small={small} key={d.tripId} />
                ))
              }
            </span>
          </div>
        ))
      }
    </>
  )
}
