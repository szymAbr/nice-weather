import React from "react";
import { Container } from "react-bootstrap";
import AppNavbar from "./components/AppNavbar";
import CurrentLocation from "./components/CurrentLocation";
import WeatherContainer from "./components/WeatherContainer";
import CitySelector from "./components/CitySelector";
import WeatherList from "./components/WeatherList";

function App() {
  return (
    <React.Fragment>
      <AppNavbar />
      <Container className="text-center">
        <CitySelector />
      </Container>
    </React.Fragment>
  );
}

export default App;
