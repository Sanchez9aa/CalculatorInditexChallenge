import React from 'react'
import { StyledResult, StyledScreen } from '../../style/screen.style'

const Screen = ({value, theme}) => {

  return (
    <StyledScreen theme={theme}>
      <StyledResult theme={theme}>
        {!value ? 0 : value}
      </StyledResult>
    </StyledScreen>
  )
}

export default Screen
