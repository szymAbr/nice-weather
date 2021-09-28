import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { fetchWeatherByCity, resetWeatherState } from "../state";
import type { RootState } from "../state/store";
import WeatherContainer from "./WeatherContainer";

export default function CitySelector() {
  const [city, setCity] = useState("");
  const dispatch = useDispatch();
  const location = useLocation();
  const error = useSelector((state: RootState) => state.weather.error);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    dispatch(fetchWeatherByCity(city));
    console.log(city);
  }

  function handleError() {
    if (error) {
      alert("Please enter a valid city name.");
    }
  }

  // clears the weather state on route change
  useEffect(() => {
    dispatch(resetWeatherState());
  }, [location]);

  useEffect(() => {
    city ? setCity(city[0].toUpperCase() + city.slice(1)) : setCity("");
  }, [city]);

  useEffect(() => {
    handleError();
  }, [error]);

  return (
    <Container className="text-center mb-4">
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col>
            <Form.Label className="h4 mb-4">Search by city name:</Form.Label>
            <Form.Control
              placeholder="Enter city"
              onChange={(e) => setCity(e.target.value)}
              value={city}
              style={{ width: "30%" }}
              className="m-auto"
            />
          </Col>
        </Row>
        <Row className="p-3">
          <Col>
            <Button className="mt-2">Check weather forecast</Button>
          </Col>
        </Row>
      </Form>
      <WeatherContainer />
    </Container>
  );
}
