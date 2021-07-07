import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import { setPosition } from "../state";

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
  }, [lat, lon]);

  return (
    <Container className="text-center">
      <Row>
        <Col className="h2 mb-3">Weather for: /location/</Col>
      </Row>
    </Container>
  );
}
