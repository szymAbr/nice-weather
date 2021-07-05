import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "react-bootstrap";
import { fetchWeatherByCoords } from "../state";
import type { RootState } from "../state/store";

export default function WeatherContainer() {
  let coords = useSelector((state: RootState) => state.position.position);
  let weather = useSelector((state: RootState) => state.weather.weather);
  const dispatch = useDispatch();

  function handleClick() {
    let lat = coords[0];
    let lon = coords[1];
    let currentWeather = dispatch(fetchWeatherByCoords(lat, lon));
    console.log(currentWeather);
  }

  return (
    <div>
      <Button onClick={handleClick}>
        Get the weather for your current location!
      </Button>
      <h2>{weather ? <h2>{weather.name}</h2> : null}</h2>
    </div>
  );
}
