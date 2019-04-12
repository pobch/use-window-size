import React from 'react'
import { useWindowResize } from './useWindowResize'
import * as S from './styled'

const App = () => {
  const { width, height } = useWindowResize()
  return (
    <S.FlexContainer>
      <S.Title>Window width is: {width}</S.Title>
      <S.Title>Window height is: {height}</S.Title>
    </S.FlexContainer>
  )
}

export default App
