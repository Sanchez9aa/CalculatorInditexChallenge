import React from 'react'
import Buttons from '../buttons/Buttons'
import {StyledHiddenVissibility} from '../../style/buttons.style'

const Main = ({theme}) => {
  return (
    <>
      <StyledHiddenVissibility>Calculate whathever you want</StyledHiddenVissibility>
      <Buttons theme={theme}/>
    </>
  )
}

export default Main
