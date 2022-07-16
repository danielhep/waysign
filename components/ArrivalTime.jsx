import classNames from 'classnames'
import styled from 'styled-components'
import { Rss } from 'styled-icons/octicons'

const RealTimeIcon = styled(Rss)`
  color: limegreen;
  vertical-align: top;
`

export default function ArrivalTime ({ realTime, time, small }) {
  return (
    <p className={classNames(small ? 'text-4xl' : 'text-7xl', 'whitespace-nowrap')}>
      {time}
      {realTime && <RealTimeIcon size={24} />}
      {/* <sub className={small ? 'text-xl' : 'text-4xl'}>min</sub> */}
    </p>
  )
}
