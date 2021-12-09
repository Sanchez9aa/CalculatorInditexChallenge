import { combineReducers } from "redux";
import { calcReducer } from "./calcReducer";
import { themeReducer } from "./themeReducer"

const reducers = combineReducers({
  calcReducer,
  themeReducer
});

export default reducers