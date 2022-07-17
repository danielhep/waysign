import StopRouteTimes from './StopRouteTimes'
import RouteCircle from './RouteCircle'

export default function RouteSection ({
  routeName,
  rows = [],
  color,
  type,
  small
}) {
  return (
    <div className='flex'>
      <RouteCircle className='w-32 h-32' color={color} routeName={routeName} type={type} />
      <div className='flex flex-col gap-y-3 w-full px-8'>
        {
          rows.map(row => (
            <StopRouteTimes
              destination={row.destination}
              routeId={row.routeId}
              stopId={row.stopId}
              key={row.destination}
              small={small}
            />
          ))
        }
        {/* <StopRouteTimes destination='Stadium' small />
        <StopRouteTimes destination='Angle Lake' small /> */}
      </div>
    </div>
  )
}
