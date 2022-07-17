import RouteCircle from '../RouteCircle'
import ArrivalTime from '../ArrivalTime'
import { minutesUntil, useStopTimes } from '../utils/api'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

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
        <TransitionGroup className='flex flex-col gap-y-2'>
          {data?.map((res, i) => (i < 4 &&
            <CSSTransition
              timeout={500}
              classNames='slide-up'
              key={res.tripId}
            >
              <div key={res.tripId} className='text-4xl px-4 flex justify-between w-full'>
                <span className='bg-white text-black rounded-md p-1'>{res.headsign}</span>
                <ArrivalTime realTime={res.realTime} time={minutesUntil(res.departureTime)} small showMin />
              </div>
            </CSSTransition>
          ))}
        </TransitionGroup>
      </div>
    </div>
  )
}
