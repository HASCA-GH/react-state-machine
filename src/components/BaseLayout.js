import React from 'react'
import {useMachine} from '@xstate/react'
import bookingMachine from '../machines/bookingMachine'

const BaseLayout = () => {
    const [state, send] = useMachine(bookingMachine)
    console.log("Our machine::::: ", state)
  return (
    <div>BaseLayout - Hola</div>
  )
}

export default BaseLayout