import DestinationAndTimes from './DestinationAndTimes'
import RouteCircle from './RouteCircle'

export default function RouteSection ({
  routeName,
  type,
  color
}) {
  return (
    <div className='flex'>
      <RouteCircle className='w-32 h-32' color={color} routeName={routeName} type={type} />
      <div className='flex flex-col gap-y-3'>
        <DestinationAndTimes destination='Stadium' />
        <DestinationAndTimes destination='Angle Lake' />
      </div>
    </div>
  )
}
