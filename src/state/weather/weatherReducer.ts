import {
  FETCH_WEATHER_REQUEST,
  FETCH_WEATHER_SUCCESS,
  FETCH_WEATHER_FAILURE,
  RESET_WEATHER_STATE,
} from "./weatherTypes";

const initialState = {
  loading: false,
  weather: null,
  error: "",
};

interface WeatherState {
  loading: boolean;
  weather: null | object;
  error: string;
}

export default function weatherReducer(
  state: WeatherState = initialState,
  action: any
) {
  switch (action.type) {
    case FETCH_WEATHER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_WEATHER_SUCCESS:
      return {
        loading: false,
        weather: action.payload,
        error: "",
      };
    case FETCH_WEATHER_FAILURE:
      return {
        loading: false,
        weather: {},
        error: action.payload,
      };
    case RESET_WEATHER_STATE:
      return {
        ...state,
        weather: null,
      };
    default:
      return state;
  }
}
