import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Container, Row, Col, FormControl, Button } from "react-bootstrap";
import { fetchWeatherByCity } from "../state";

export default function CitySelector() {
  const [city, setCity] = useState("");
  const dispatch = useDispatch();

  function handleClick(e: any) {
    dispatch(fetchWeatherByCity(city));
  }

  return (
    <Container>
      <Row>
        <Col>
          <h2>Check another city</h2>
        </Col>
      </Row>

      <Row>
        <Col xs={4} className="text-center">
          <FormControl
            placeholder="Enter city"
            onChange={(e) => setCity(e.target.value)}
            value={city}
          />
        </Col>
      </Row>

      <Row>
        <Col>
          <Button onClick={handleClick}>Check weather</Button>
        </Col>
      </Row>
    </Container>
  );
}
