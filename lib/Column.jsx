import SingleRoute from './modules/SingleRoute'
import SingleStop from './modules/SingleStop'

const getModule = (type) => {
  switch (type) {
    case 'singleRoute':
      return SingleRoute
    case 'singleStop':
      return SingleStop
  }
}

export default function Column ({ col }) {
  return (
    <div className='flex flex-col gap-y-4 p-2' style={{ background: col.background }}>
      {
        col.rows.map((row, i) => {
          const Module = getModule(row.type)
          return Module && <Module key={i} config={row} />
        })
      }
    </div>
  )
}
