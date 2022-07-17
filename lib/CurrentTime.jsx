import { format } from 'date-fns'
import * as React from 'react'
import { useInterval } from 'react-use'

export default function CurrentTime () {
  const [currentDate, setCurrentDate] = React.useState(new Date())
  useInterval(() => setCurrentDate(new Date()), 1000)

  return (
    <div>
      {format(currentDate, 'MMM d - h:mm aa')}
    </div>
  )
}
