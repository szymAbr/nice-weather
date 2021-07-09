import React from "react";
import AppNavbar from "./components/AppNavbar";
import CurrentLocation from "./components/CurrentLocation";
import CitySelector from "./components/CitySelector";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <AppNavbar />
      <Switch>
        <Route exact path="/">
          <Redirect to="/currentlocation" />
        </Route>
        <Route exact path="/currentlocation" component={CurrentLocation} />
        <Route exact path="/cityselector" component={CitySelector} />
      </Switch>
    </Router>
  );
}

export default App;
