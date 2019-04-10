import React from 'react'
import { useWindowResize } from './useWindowResize'

const App = () => {
  const { width, height } = useWindowResize()
  return (
    <div>
      <p>Window width is: {width}</p>
      <p>Window height is: {height}</p>
    </div>
  )
}

export default App
