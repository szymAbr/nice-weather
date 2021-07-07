import React from "react";
import AppNavbar from "./components/AppNavbar";
import CurrentLocation from "./components/CurrentLocation";
import CitySelector from "./components/CitySelector";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <AppNavbar />
      <Switch>
        <Route path="/currentlocation" component={CurrentLocation} />
        <Route path="/cityselector" component={CitySelector} />
      </Switch>
    </Router>
  );
}

export default App;
