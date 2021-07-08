import React from "react";
import { useSelector } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import TimeSelector from "./TimeSelector";
import WeatherList from "./WeatherList";
import type { RootState } from "../state/store";

export default function WeatherContainer() {
  const weather = useSelector((state: RootState) => state.weather.weather);
  const time = useSelector((state: RootState) => state.time.time);

  return (
    <>
      {weather ? (
        <Container className="mt-2">
          <Row>
            <Col>
              <TimeSelector />
            </Col>
          </Row>
          <Row className="mt-4">
            {time ? (
              <Col className="h2 mb-3">Forecast for {weather.city.name}</Col>
            ) : null}
          </Row>
          <Row>
            <Col>
              <WeatherList />
            </Col>
          </Row>
        </Container>
      ) : null}
    </>
  );
}
