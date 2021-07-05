import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Row, Col, FormControl, Button } from "react-bootstrap";
import { fetchWeatherByCity } from "../state";
import WeatherList from "./WeatherList";
import { RootState } from "../state/store";

export default function CitySelector() {
  const [city, setCity] = useState("");
  let weather = useSelector((state: RootState) => state.weather.weather);
  const dispatch = useDispatch();

  function handleClick(e: any) {
    dispatch(fetchWeatherByCity(city));
  }

  return (
    <Container>
      <Row className="p-3">
        <Col>
          <h2>Search by city name:</h2>
        </Col>

        <Col>
          <FormControl
            placeholder="Enter city"
            onChange={(e) => setCity(e.target.value)}
            value={city}
          />
        </Col>
      </Row>

      <Row className="p-3">
        <Col>
          <Button onClick={handleClick}>Check weather forecast</Button>
        </Col>
      </Row>

      {weather && <WeatherList />}
    </Container>
  );
}
