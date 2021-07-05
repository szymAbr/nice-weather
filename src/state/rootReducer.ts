import { combineReducers } from "redux";
import positionReducer from "./position/positionReducer";
import weatherReducer from "./weather/weatherReducer";

const rootReducer = combineReducers({
  position: positionReducer,
  weather: weatherReducer,
});

export default rootReducer;
