import { combineReducers } from "redux";
import weatherReducer from "./weather/weatherReducer";
import timeReducer from "./time/timeReducer";
import historyReducer from "./history/historyReducer";

const rootReducer = combineReducers({
  weather: weatherReducer,
  time: timeReducer,
  history: historyReducer,
});

export default rootReducer;
