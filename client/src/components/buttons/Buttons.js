import React from 'react'
import {StyledButtonsWrapper, StyledButton, StyledButtonDark, StyledEqualButton} from '../../style/buttons.style'
import Screen from '../screen/Screen'
import { useSelector, useDispatch } from 'react-redux'

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

/*   const deleteClickHandler = () => {
    if( !value )
    {
      setValue({
        ...value,
        res: Number(value.res.toString().slice(0, -1))
      })
    }else{
      setValue({
        ...value,
        num: Number(value.num.toString().slice(0, -1))
      })
    }
  } */


  return (
    <>
      <Screen value={value ? value : calc.calcReducer.res} theme={theme}/>
      <StyledButtonsWrapper theme={theme}>
        {
          setButtons.map(x => {
            if(x === "DEL"){
              return <StyledButtonDark key={x}  theme={theme} /* onClick={() => deleteClickHandler()} */>{x}</StyledButtonDark> 
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
