import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { fetchWeatherByCity, resetWeatherState } from "../state";
import WeatherContainer from "./WeatherContainer";

export default function CitySelector() {
  const [city, setCity] = useState("");
  const dispatch = useDispatch();
  const location = useLocation();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    dispatch(fetchWeatherByCity(city));
  }

  // clears the weather state on route change
  useEffect(() => {
    dispatch(resetWeatherState());
  }, [location]);

  useEffect(() => {
    city ? setCity(city[0].toUpperCase() + city.slice(1)) : setCity("");
  }, [city]);

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
