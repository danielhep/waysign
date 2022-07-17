import classNames from 'classnames'
import styled from 'styled-components'
import { Rss } from 'styled-icons/octicons'

const RealTimeIcon = styled(Rss)`
  color: limegreen;
  vertical-align: top;
`

export default function ArrivalTime ({ realTime, time, small, showMin }) {
  return (
    <p className={classNames(small ? 'text-4xl' : 'text-7xl', 'whitespace-nowrap')}>
      <span className='relative'>
        {time}
        <span className='absolute top-[-4px]'>{realTime && <RealTimeIcon size={20} />}</span>
      </span>
      {showMin && <sub className={small ? 'text-xl ml-2' : 'text-4xl ml-2'}>min</sub>}
    </p>
  )
}
