import { combineReducers } from "redux";
import positionReducer from "./position/positionReducer";
import weatherReducer from "./weather/weatherReducer";
import cityReducer from "./city/cityReducer";
import timeReducer from "./time/timeReducer";

const rootReducer = combineReducers({
  position: positionReducer,
  weather: weatherReducer,
  city: cityReducer,
  time: timeReducer,
});

export default rootReducer;
