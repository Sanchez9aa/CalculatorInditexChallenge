import { ActionTypes } from "../contants/actions-types"

export const NumClick = (num) => ({
  type: ActionTypes.NUM_CLICK,
  payload: num
});

export const DecimalClick = (num) => ({
  type: ActionTypes.DECIMAL_CLICK,
  payload: num
})

export const ResetClick = () => ({
  type: ActionTypes.RESET_CLICK,
})

export const SignClick = (num) => ({
  type: ActionTypes.SIGN_CLICK,
  payload: num
});

export const EqualClick = () => ({
  type: ActionTypes.EQUAL_CLICK
});

export const DeleteClick = (num) => ({
  type: ActionTypes.DELETE_CLICK,
  payload: num
});