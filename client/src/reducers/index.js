import basicDataReducer from "./basicData";
import fiveDayReducer from "./fiveDay";
import savedReducer from "./saved";
import apiRequestReducer from "./apiRequest";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  basicData: basicDataReducer,
  fiveDay: fiveDayReducer,
  saved: savedReducer,
  apiRequest: apiRequestReducer
});

export default rootReducer;
