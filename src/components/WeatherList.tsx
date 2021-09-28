import React, { useState } from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../state/store";
import WeatherCard from "./WeatherCard";
import { Container, Row, Col } from "react-bootstrap";
import { useEffect } from "react";

export default function WeatherList() {
  const [weatherList, setWeatherList] = useState([]);
  const [weatherItems, setWeatherItems] = useState([]);
  const weather = useSelector((state: RootState) => state.weather.weather);
  const time = useSelector((state: RootState) => state.time.time);

  async function getWeatherList(weather: any) {
    let weatherList;
    if (weather) {
      weatherList = await weather.list.map((item: any) => (
        <Col key={item.dt} sm={12} md={4}>
          <WeatherCard
            description={item.weather[0].description}
            icon={item.weather[0].icon}
            temp={item.main.temp}
            dt={item.dt * 1000}
          />
        </Col>
      ));
      setWeatherList(weatherList);
    }
  }

  // returns the number of weather cards to be rendered, based on the time period selection
  function checkTimePeriod(time: number) {
    switch (time) {
      case 6:
        return 3;
      case 15:
        return 6;
      case 24:
        return 9;
      default:
        break;
    }
  }

  useEffect(() => {
    getWeatherList(weather);
  }, [weather]);

  useEffect(() => {
    setWeatherItems(weatherList.slice(0, checkTimePeriod(time)));
  }, [time]);

  return (
    <Container className="m-auto">
      <Row className="m-auto" style={{ width: "100%" }}>
        {weatherItems}
      </Row>
    </Container>
  );
}
