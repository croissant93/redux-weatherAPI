import { combineReducers } from "redux";
import weatherBox from "../modules/weatherBox";

//루트 리듀서

const rootReducer = combineReducers({
  weatherBox,
});

export default rootReducer;
