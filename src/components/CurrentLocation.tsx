import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Card } from "react-bootstrap";
import { setPosition } from "../state";
import { RootState } from "../state/store";

export default function CurrentLocation() {
  const [lat, setLat] = useState(0);
  const [lon, setLon] = useState(0);

  // let weather = useSelector((state: RootState) => state.weather.weather);
  const dispatch = useDispatch();

  function getPosition() {
    function updatePosition(position: any) {
      setLat(position.coords.latitude);
      setLon(position.coords.longitude);
    }
    navigator.geolocation
      ? navigator.geolocation.getCurrentPosition(updatePosition)
      : alert("Geolocation not available.");
  }

  useEffect(() => {
    getPosition();
  }, []);

  useEffect(() => {
    dispatch(setPosition([lat, lon]));
  }, [lon]);

  return (
    <Card className="mt-4">
      <Card.Header>Your current location: </Card.Header>
      <Card.Body>
        <Card.Title className="mb-3">Coordinates</Card.Title>
        <Card.Text>
          <h6>Latitude: {lat}</h6>
          <h6>Longitude: {lon}</h6>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
