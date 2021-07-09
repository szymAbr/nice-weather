import { combineReducers } from "redux";
import weatherReducer from "./weather/weatherReducer";
import cityReducer from "./city/cityReducer";
import timeReducer from "./time/timeReducer";

const rootReducer = combineReducers({
  weather: weatherReducer,
  city: cityReducer,
  time: timeReducer,
});

export default rootReducer;
