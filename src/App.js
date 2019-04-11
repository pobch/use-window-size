import React from 'react'
import { useWindowResize } from './useWindowResize'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #333;
`

const H1 = styled.h1`
  color: hotpink;
`

const App = () => {
  const { width, height } = useWindowResize()
  return (
    <Container>
      <H1>Window width is: {width}</H1>
      <H1>Window height is: {height}</H1>
    </Container>
  )
}

export default App
