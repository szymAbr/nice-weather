import React from "react";
import { Card } from "react-bootstrap";
import DateTime from "./DateTime";

interface WeatherProps {
  dt: number;
  description: string;
  temp: number;
  icon: string;
}

export default function WeatherCard({ dt, description, temp, icon }: WeatherProps) {
  return (
    <Card
      className="m-auto mt-3 mb-3 text-center"
      style={{ width: "100%", backgroundColor: "#BDD7EB" }}
    >
      <Card.Img
        variant="top"
        src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
        className="m-auto mt-2"
        style={{ width: "7rem" }}
      />
      <Card.Body>
        <Card.Title className="mb-4">
          {description[0].toUpperCase() + description.slice(1)}
        </Card.Title>
        <Card.Text className="h5 mb-4">
          <i className="bi bi-thermometer-half"></i>
          {temp} &deg;C
        </Card.Text>
        <DateTime dt={dt} />
      </Card.Body>
    </Card>
  );
}
