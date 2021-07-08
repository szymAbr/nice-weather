import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router";
import { Container, Row, Col, Button } from "react-bootstrap";
import { fetchWeatherByCoords, resetWeatherState, setPosition } from "../state";
import type { RootState } from "../state/store";
import WeatherList from "./WeatherList";

export default function CurrentLocation() {
  const [lat, setLat] = useState(0);
  const [lon, setLon] = useState(0);

  let weather = useSelector((state: RootState) => state.weather.weather);
  const dispatch = useDispatch();
  let location = useLocation();

  function getPosition() {
    function updatePosition(position: any) {
      setLat(position.coords.latitude);
      setLon(position.coords.longitude);
    }
    navigator.geolocation
      ? navigator.geolocation.getCurrentPosition(updatePosition)
      : alert("Geolocation not available.");
  }

  function handleClick() {
    dispatch(fetchWeatherByCoords(lat, lon));
  }

  useEffect(() => {
    getPosition();
  }, []);

  useEffect(() => {
    dispatch(setPosition([lat, lon]));
  }, [lat, lon]);

  useEffect(() => {
    dispatch(resetWeatherState());
  }, [location]);

  return (
    <>
      <Container className="text-center mt-4">
        <Row>
          <Col className="h4 mb-4">Check weather for your location</Col>
        </Row>
        <Row className="p-3">
          <Col>
            <Button className="mt-2" onClick={handleClick}>
              Check weather forecast
            </Button>
          </Col>
        </Row>
        {weather ? (
          <Container className="mt-4">
            <Row>
              <Col className="h2 mb-3">Weather for {weather.city.name}</Col>
            </Row>
            <Row>
              <Col>
                <WeatherList />
              </Col>
            </Row>
          </Container>
        ) : null}
      </Container>
    </>
  );
}
