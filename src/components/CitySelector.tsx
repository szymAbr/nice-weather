import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { fetchWeatherByCity } from "../state";
import WeatherList from "./WeatherList";
import { RootState } from "../state/store";

export default function CitySelector() {
  const [city, setCity] = useState("");
  let weather = useSelector((state: RootState) => state.weather.weather);
  const dispatch = useDispatch();

  function handleSubmit(e: any) {
    e.preventDefault();
    dispatch(fetchWeatherByCity(city));
  }

  useEffect(() => {
    city ? setCity(city[0].toUpperCase() + city.slice(1)) : setCity("");
  }, [city]);

  return (
    <Container className="mb-4">
      <Form className="text-center" onSubmit={handleSubmit}>
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

      {weather ? (
        <Container className="mt-4">
          <Row>
            {city ? <Col className="h2 mb-3">Weather for {city}</Col> : null}
          </Row>
          <Row>
            <Col>
              <WeatherList />
            </Col>
          </Row>
        </Container>
      ) : null}
    </Container>
  );
}
