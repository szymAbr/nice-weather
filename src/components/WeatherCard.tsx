import React from "react";
import { Card } from "react-bootstrap";

export default function WeatherCard(props: any) {
  const date = new Date(props.dt);

  return (
    <Card className="m-3" style={{ width: "20em" }}>
      <Card.Img
        variant="top"
        src={`http://openweathermap.org/img/wn/${props.icon}@2x.png`}
      />
      <Card.Body>
        <Card.Title>{props.main}</Card.Title>
        <Card.Text>{date.toLocaleDateString()}</Card.Text>
        <Card.Text>{date.toLocaleTimeString()}</Card.Text>
        <Card.Text>Min: {props.temp_min} &deg;C</Card.Text>
        <Card.Text>Max: {props.temp_max} &deg;C</Card.Text>
      </Card.Body>
    </Card>
  );
}
