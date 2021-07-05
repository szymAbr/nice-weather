import React from "react";
import { Container } from "react-bootstrap";
import AppNavbar from "./components/AppNavbar";
import CurrentLocation from "./components/CurrentLocation";
import WeatherContainer from "./components/WeatherContainer";
import WeatherCard from "./components/WeatherCard";
import CitySelector from "./components/CitySelector";

function App() {
  return (
    <React.Fragment>
      <AppNavbar />
      <Container>
        <CurrentLocation />
        <WeatherContainer />
      </Container>
      <hr />
      <hr />
      <Container>
        {/* <WeatherCard dt={1602104400 * 1000} temp_min="21.56" temp_max="26.78" main="Clear" icon="01d" /> */}
        <CitySelector />
      </Container>
    </React.Fragment>
  );
}

export default App;
