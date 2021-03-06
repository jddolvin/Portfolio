import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Contact from "../pages/Contact";
import Home from "../pages/Home";
import NotFound from "./NotFound";
import Skills from "../pages/Skills";
import Pokedex from "../pages/Pokedex";
import Covid from "../pages/CovidTracker";
import TetrisApp from "../tetris/TetrisApp";
import Weather from "../pages/Weather";

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact={true} path="/">
          <Home />
        </Route>
        <Route exact={true} path="/pokedex">
          <Pokedex />
        </Route>
        <Route exact={true} path="/skills">
          <Skills />
        </Route>
        <Route exact={true} path="/contact">
          <Contact />
        </Route>
        <Route exact={true} path="/covid-tracker">
          <Covid />
        </Route>
        <Route exact={true} path="/tetris">
          <TetrisApp />
        </Route>
        <Route exact={true} path="/weather">
          <Weather />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}
