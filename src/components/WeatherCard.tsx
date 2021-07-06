import React from "react";
import { Card } from "react-bootstrap";

export default function WeatherCard(props: any) {
  const date = new Date(props.dt);

  return (
    <Card className="m-3 text-center">
      <Card.Img
        variant="top"
        src={`http://openweathermap.org/img/wn/${props.icon}@2x.png`}
      />
      <Card.Body>
        <Card.Title className="mb-3">{props.main}</Card.Title>
        <Card.Text>
          <i className="bi bi-calendar"></i> {date.toLocaleDateString()}
        </Card.Text>
        <Card.Text>
          <i className="bi bi-clock"></i> {date.toLocaleTimeString()}
        </Card.Text>
        <Card.Text>
          <i className="bi bi-thermometer"></i> Min: {props.temp_min} &deg;C
        </Card.Text>
        <Card.Text>
          <i className="bi bi-thermometer-high"></i> Max: {props.temp_max}
          &deg;C
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
