import React from 'react'
import { useWindowResize } from './useWindowResize'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`

const App = () => {
  const { width, height } = useWindowResize()
  return (
    <Container>
      <h1>Window width is: {width}</h1>
      <h1>Window height is: {height}</h1>
    </Container>
  )
}

export default App
