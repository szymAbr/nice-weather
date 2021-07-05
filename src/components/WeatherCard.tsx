import React from "react";
import { Card } from "react-bootstrap";

export default function WeatherCard(props: any) {
  const date = new Date(props.dt);

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img
        variant="top"
        src={`http://openweathermap.org/img/wn/${props.icon}@2x.png`}
      />
      <Card.Body>
        <Card.Title>{props.main}</Card.Title>
        <p>
          {date.toLocaleDateString()} | {date.toLocaleTimeString()}
        </p>
        <p>Min: {props.temp_min}</p>
        <p>Max: {props.temp_max}</p>
      </Card.Body>
    </Card>
  );
}
