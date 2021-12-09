import React from 'react'
import Theme from '../themes/Theme'
import { StyledHeader, StyledLetter } from '../../style/header.style'

const Header = ({theme}) => {
  return (
    <StyledHeader>
      <StyledLetter theme={theme}>Calc</StyledLetter>
      <Theme/>
    </StyledHeader>
  )
}

export default Header
