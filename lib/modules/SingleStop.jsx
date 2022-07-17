
import RouteCircle from '../RouteCircle'
import ArrivalTime from '../ArrivalTime'
import { minutesUntil, useStopTimes } from '../utils/api'
import React from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

export default function SingleRoute ({ config }) {
  const {
    title,
    routes,
    stopId
  } = config
  const routeIds = routes.map(route => route.routeId)
  const data = useStopTimes(stopId, routeIds)
  const routeData = routes.map(route => ({
    ...route,
    data: data
      ?.filter(d => d.routeId === route.routeId)
      .filter(d => route.headsignFilter ? d.headsign === route.headsignFilter : true)
  }))
  // Store routes in state so they are in case one route disappears from real time tracking.
  return (
    <div className='flex flex-col gap-y-2'>
      <div className='border-b pb-1'>
        <h3 className='text-3xl'>{title}</h3>
      </div>
      {
        routeData.map(r => (
          <React.Fragment key={r.routeId}>
            <div className='flex items-center gap-x-4' key={r.routeId}>
              <RouteCircle routeName={r.route} color={r.routeColor} type='square' />
              <div className='flex flex-col gap-y-2'>
                <h3 className='text-4xl'>{r.routeHeader}</h3>
                <TransitionGroup className='flex gap-x-8'>
                  {r.data?.map((d, i) => (
                    i < 3 && (
                      <CSSTransition
                        timeout={500}
                        classNames='fade'
                        key={d.tripId}
                      >
                        <ArrivalTime realTime={d.realtime} time={minutesUntil(d.departureTime)} small />
                      </CSSTransition>
                    )
                  ))}
                </TransitionGroup>
              </div>
            </div>
          </React.Fragment>
        ))
      }
    </div>
  )
}
