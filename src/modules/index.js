import { combineReducers } from "redux";
import counter from "./counter";
import todos from "./todos";
import addNumber from "../modules/addNumber";
import timer from "../modules/timer";

//루트 리듀서

const rootReducer = combineReducers({
  // counter,
  // todos,
  // addNumber,
  timer,
});

export default rootReducer;
