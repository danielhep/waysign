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
      {/* padding on a separate span to make animation work */}
      <span className='pr-4'>
        <span className='relative'>
          {time}
          <span className={classNames('relative top-[-4px]', { invisible: !realTime })}><RealTimeIcon size={20} /></span>
        </span>
        {showMin && <sub className={small ? 'text-xl' : 'text-4xl'}>min</sub>}
      </span>
    </p>
  )
}
