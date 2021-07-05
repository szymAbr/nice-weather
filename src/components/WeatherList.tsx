import React from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../state/store";
import WeatherCard from "./WeatherCard";
import { Row, Col } from "react-bootstrap";

export default function WeatherList() {
  let weather = useSelector((state: RootState) => state.weather.weather);

  return (
    <Row>
      {weather.map((item: any) => {
        return (
          <Col key={item.dt}>
            <WeatherCard
              temp_max={item.temp_max}
              temp_min={item.temp_min}
              dt={item.dt * 1000}
              main={item.weather[0].main}
              icon={item.weather[0].icon}
            />
          </Col>
        );
      })}
    </Row>
  );
}
