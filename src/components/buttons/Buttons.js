import React from 'react'
import {StyledButtonsWrapper, StyledButton, StyledButtonDark, StyledEqualButton} from '../../style/buttons.style'
import Screen from '../screen/Screen'
import { useSelector, useDispatch } from 'react-redux'
import {ArrowLeft} from "react-feather" 

const Buttons = ({theme}) => {  

  const calc = useSelector(state => state)
  const value = calc.calcReducer.num
  const dispatch = useDispatch()

  const setButtons = [7, 8, 9, "DEL", 4, 5, 6, "+", 1, 2, 3, "-", ".", 0, "/", "*", "RESET", "="]

  const numClickHandler = (e) => {
    const val = e.target.innerHTML
    if(val < 16 || val === undefined){
      dispatch({type:"NUM_CLICK", payload: val})
    }
  }

  const decimalClickHandler = (e) => {
    const val = e.target.innerHTML
    dispatch({type:"DECIMAL_CLICK", payload: val})
  }
  
  const resetClickHandler = () => {
    dispatch({type:"RESET_CLICK"})
  }

  const signClickHandler = (e) => {
    const val = e.target.innerHTML
    dispatch({type:"SIGN_CLICK", payload: val})
  } 

  const equalClickHandler = () => {
    if (calc.calcReducer.sign && calc.calcReducer.num){
      dispatch({type:"EQUAL_CLICK"})
    }
  }

  const arrayClickHandler = () => {
    dispatch({type:"ARRAY_CLICK"})
  }


  return (
    <>
      <Screen value={value ? value : calc.calcReducer.res} array={calc.calcReducer.on === 1 && calc.calcReducer.value.length > 0 ? calc.calcReducer.value : null} theme={theme}/>
      <StyledButtonsWrapper theme={theme}>
        {
          setButtons.map(x => {
            if(x === "DEL"){
              return <StyledButtonDark key={x}  theme={theme} onClick={() => arrayClickHandler()}><ArrowLeft size={40}/></StyledButtonDark> 
            }
            if(x === "RESET"){
              return <StyledButtonDark key={x} theme={theme} onClick={() => resetClickHandler()}>{x}</StyledButtonDark>
            }
            if(x === "."){
              return<StyledButton key={x} theme={theme} onClick={(e) => decimalClickHandler(e)}>{x}</StyledButton> 
            }
            if(x === "+" || x === "-" || x === "/" || x === "*"){
              return<StyledButton key={x} theme={theme} onClick={(e) => signClickHandler(e)}>{x}</StyledButton>
            }
            if(x === "="){
              return <StyledEqualButton key={x} theme={theme} onClick={() => equalClickHandler()}>=</StyledEqualButton>
            }
            else{
              return<StyledButton key={x} theme={theme} onClick={(e) => numClickHandler(e)}>{x}</StyledButton>
            }
             
          })
        }
      </StyledButtonsWrapper>
    </>
  )
}

export default Buttons
