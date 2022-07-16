import styled from 'styled-components'
import { Rss } from 'styled-icons/octicons'

const RealTimeIcon = styled(Rss)`
  color: limegreen;
  vertical-align: top;
`

export default function ArrivalTime ({ realTime, time }) {
  return (
    <p className='text-7xl'>
      {time}
      {realTime && <RealTimeIcon size={24} />}
      <sub className='text-4xl'>min</sub>
    </p>
  )
}
