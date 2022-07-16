import ArrivalTime from './ArrivalTime'

export default function DestinationAndTimes ({ destination }) {
  return (
    <div className='flex flex-col ml-4'>
      <div>
        <p className='text-4xl bg-white text-black rounded-lg p-2'>{destination}</p>
      </div>
      <span className='mt-4 flex gap-x-24'>
        <ArrivalTime realTime time='4' />
        <ArrivalTime time='10' />
        <ArrivalTime realTime time='16' />
      </span>
    </div>
  )
}
