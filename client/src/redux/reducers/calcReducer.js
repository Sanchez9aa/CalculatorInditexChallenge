import { ActionTypes } from "../contants/actions-types";

const initialState = {
  sign: "",
  num: 0,
  res: 0
}

export const calcReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.NUM_CLICK:
      return {...state, 
        num: 
        state.num === 0 && payload === 0
        ? 0
        : state.num % 1 === 0
        ? Number(state.num + payload)
        : state.num + payload,
      res: !state.sign ? 0 : state.res
    }
    case ActionTypes.DECIMAL_CLICK:
      return { ...state, num: !state.num.toString().includes(".") ? state.num + payload : state.num }
    case ActionTypes.RESET_CLICK:
      return { ...state, sign: "", num: 0, res: 0  }
    case ActionTypes.SIGN_CLICK:
      return { ...state, 
        sign: payload, 
        res: !state.res && state.num ? state.num : state.res, 
        num: 0 
      }
    case ActionTypes.EQUAL_CLICK:
      const operations = (a,b,sign) => {
        switch(sign){
          case "+":
            return a+b;
          case "-":
            return a-b;
          case "/":
            return a/b;
          case "*":
            return a*b
          default:
            return 0
        }
      }
    return {
      ...state,
      res:
          state.num === "0" && state.sign === "/"
          ? "Can not divide with 0"
          : operations(Number(state.res), Number(state.num), state.sign),
        sign: "",
        num: 0
    }
    default:
      return state;
  }
}

export default calcReducer