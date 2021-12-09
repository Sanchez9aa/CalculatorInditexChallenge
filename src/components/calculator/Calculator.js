import React from 'react'
import Header from '../header/Header'
import Main from '../main/Main'
import { StyledCalculator } from '../../style/calculator.style'
import { useSelector} from "react-redux";


const Calculator = () => {

  const theme = useSelector(state =>  state)
  const themes = theme.themeReducer.theme

  return (
    <StyledCalculator theme={themes}>
      <Header theme={themes}/>
      <Main theme={themes}/>
    </StyledCalculator>
  )
}

export default Calculator
