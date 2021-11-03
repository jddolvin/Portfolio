import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import About from "../pages/About";
import Contact from "../pages/Contact";
import Games from "../pages/Games";
import Home from "../pages/Home";
import Programming from "../pages/Programming";
import NotFound from "./NotFound";
import Skills from "../pages/Skills";
export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact={true} path="/">
          <Home />
        </Route>
        <Route exact={true} path="/programming">
          <Programming />
        </Route>
        <Route exact={true} path="/games">
          <Games />
        </Route>
        <Route exact={true} path="/skills">
          <Skills />
        </Route>
        <Route exact={true} path="/contact">
          <Contact />
        </Route>
        <Route exact={true} path="/about">
          <About />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}
