import { combineReducers } from "redux";
import weatherReducer from "./weather/weatherReducer";
import timeReducer from "./time/timeReducer";

const rootReducer = combineReducers({
  weather: weatherReducer,
  time: timeReducer,
});

export default rootReducer;
