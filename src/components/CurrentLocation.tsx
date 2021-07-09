import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router";
import { Container, Row, Col, Button } from "react-bootstrap";
import { fetchWeatherByCoords, resetWeatherState } from "../state";
import WeatherContainer from "./WeatherContainer";

export default function CurrentLocation() {
  const [lat, setLat] = useState(0);
  const [lon, setLon] = useState(0);
  const dispatch = useDispatch();
  const location = useLocation();

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

  // clears the weather state on route change
  useEffect(() => {
    dispatch(resetWeatherState());
  }, [location]);

  return (
    <Container className="text-center mt-4">
      <Row>
        <Col className="h4 mb-4">
          Check weather forecast for your current location
        </Col>
      </Row>
      <Row className="p-3">
        <Col>
          <Button className="mt-2" onClick={handleClick}>
            Check weather forecast
          </Button>
        </Col>
      </Row>
      <WeatherContainer />
    </Container>
  );
}
