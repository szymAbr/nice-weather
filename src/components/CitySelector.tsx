import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import {
  fetchWeatherByCity,
  resetWeatherState,
  setSearchHistory,
} from "../state";
import type { RootState } from "../state/store";
import WeatherContainer from "./WeatherContainer";

export default function CitySelector() {
  const [city, setCity] = useState("");
  const [history, setHistory] = useState<string[]>([]);
  const dispatch = useDispatch();
  const location = useLocation();
  const error = useSelector((state: RootState) => state.weather.error);
  const weather = useSelector((state: RootState) => state.weather.weather);
  const currHistoryState = useSelector(
    (state: RootState) => state.history.history
  );

  function recentSearches(item: string) {
    let currHistory = history;
    if (!history.includes(item)) {
      if (history.length <= 10) {
        currHistory.push(item);
        setHistory(currHistory);
      } else {
        currHistory.shift();
        currHistory.push(item);
        setHistory(currHistory);
      }
    } else {
      const itemIndex = currHistory.indexOf(item);
      currHistory = currHistory
        .slice(0, itemIndex)
        .concat(currHistory.slice(itemIndex + 1, currHistory.length + 1));
      currHistory.push(item);
      setHistory(currHistory);
    }
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    dispatch(resetWeatherState());
    dispatch(fetchWeatherByCity(city));
    recentSearches(city);
  }

  function handleError() {
    if (error) {
      alert("Please enter a valid city name.");
    }
  }

  // clears the weather state on route change
  useEffect(() => {
    dispatch(resetWeatherState());
    setHistory(currHistoryState);
  }, [location]);

  useEffect(() => {
    city ? setCity(city[0].toUpperCase() + city.slice(1)) : setCity("");
  }, [city]);

  useEffect(() => {
    dispatch(setSearchHistory(history));
  }, [history]);

  useEffect(() => {
    handleError();
  }, [error]);

  useEffect(() => {
    setCity("");
  }, [weather]);

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
