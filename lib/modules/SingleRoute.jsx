import RouteCircle from '../RouteCircle'
import ArrivalTime from '../ArrivalTime'
import { minutesUntil, useStopTimes } from '../utils/api'

export default function SingleRoute ({ config }) {
  const {
    iconType,
    iconColor,
    routeName,
    title,
    routeId,
    stopId
  } = config
  const data = useStopTimes(stopId, [routeId])
  return (
    <div className='flex'>
      <RouteCircle routeName={routeName} color={iconColor} iconType={iconType} className='h-24 w-24' />
      <div className='flex flex-col gap-y-2 flex-grow'>
        <h1 className='text-4xl ml-4'>{title}</h1>
        {data?.map(res => (
          <div key={res.tripId} className='text-4xl px-4 flex justify-between w-full'>
            <span className='bg-white text-black rounded-md p-1'>{res.headsign}</span>
            <ArrivalTime realTime={res.realTime} time={minutesUntil(res.departureTime)} small showMin />
          </div>
        ))}
      </div>
    </div>
  )
}
