import { combineReducers } from "redux";
import positionReducer from "./position/positionReducer";
import weatherReducer from "./weather/weatherReducer";
import cityReducer from "./city/cityReducer";

const rootReducer = combineReducers({
  position: positionReducer,
  weather: weatherReducer,
  city: cityReducer,
});

export default rootReducer;
