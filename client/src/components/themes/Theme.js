import React from 'react'
import { StyledTheme, StyledThemeLetter, StyledButton, StyledBg, StyledRigthNumbers, StyledRigthNumber } from '../../style/theme.style'
import { useSelector, useDispatch} from "react-redux";

const Theme = () => {

  const theme = useSelector(state =>  state)
  const themes = theme.themeReducer.theme
  const dispatch = useDispatch()
  
  const handleChange = () => {
    if (themes === 1) {
      dispatch({type:"1"})
    }else if (themes === 2){
      dispatch({type:"2"})
    }else{
      dispatch({type:"3"})
    }
  }
  
  return (
    <StyledTheme>
      <StyledThemeLetter theme={themes}>THEME</StyledThemeLetter>
      <StyledRigthNumbers>
        <StyledRigthNumber theme={themes}>1</StyledRigthNumber>
        <StyledRigthNumber theme={themes}>2</StyledRigthNumber>
        <StyledRigthNumber theme={themes}>3</StyledRigthNumber>
      </StyledRigthNumbers>
      <StyledBg theme={themes}>
        <StyledButton theme={themes} onClick={() => handleChange()}/>
      </StyledBg>
    </StyledTheme>
  )
}

export default Theme
