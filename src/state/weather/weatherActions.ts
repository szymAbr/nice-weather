import {
  FETCH_WEATHER_REQUEST,
  FETCH_WEATHER_SUCCESS,
  FETCH_WEATHER_FAILURE,
} from "./weatherTypes";
import axios from "axios";

const apiUrl = process.env.REACT_APP_API_URL;
const apiKey = process.env.REACT_APP_API_KEY;

export type WeatherAction = { type: string; payload: object | string };

export function fetchWeatherRequest() {
  return {
    type: FETCH_WEATHER_REQUEST,
  };
}

export function fetchWeatherSuccess(weather: object): WeatherAction {
  return {
    type: FETCH_WEATHER_SUCCESS,
    payload: weather,
  };
}

export function fetchWeatherFailure(error: string): WeatherAction {
  return {
    type: FETCH_WEATHER_FAILURE,
    payload: error,
  };
}

export function fetchWeatherByCoords(lat: number, lon: number) {
  return (dispatch: any) => {
    dispatch(fetchWeatherRequest());
    axios
      .get(
        `${apiUrl}/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`
      )
      .then((response) => {
        const weather = response.data;
        dispatch(fetchWeatherSuccess(weather));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(fetchWeatherFailure(errorMsg));
      });
  };
}

export function fetchWeatherByCity(city: string) {
  return (dispatch: any) => {
    dispatch(fetchWeatherRequest());
    axios
      .get(`${apiUrl}/forecast?q=${city}&appid=${apiKey}`)
      .then((response) => {
        const weather = response.data;
        dispatch(fetchWeatherSuccess(weather));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(fetchWeatherFailure(errorMsg));
      });
  };
}
