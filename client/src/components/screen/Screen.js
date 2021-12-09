import React from 'react'
import { StyledResult, StyledScreen } from '../../style/screen.style'

const Screen = ({value, array, theme}) => {

  return (
    <StyledScreen theme={theme}>
      <StyledResult theme={theme}>
        {array ? array : (!value ? 0 : value)}
      </StyledResult>
    </StyledScreen>
  )
}

export default Screen
