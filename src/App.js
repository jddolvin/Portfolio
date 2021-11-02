import "./App.css";
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
  useLocation,
} from "react-router-dom";
import Radio from "./Radio";
import About from "./About";
import Contact from "./Contact";
import Games from "./Games";
import Home from "./Home";
import Programming from "./Programming";

function App() {
  return (
    <Router>
      <div className="App">
        <Link to="/" class="nav">Home</Link>
        <Link to="/programming" class="nav">Programming Projects</Link>
        <Link to="/radio" class="nav">Radio Projects</Link>
        <Link to="/games" class="nav">Games</Link>
        <Link to="/about" class="nav">About Me</Link>
        <Link to="/contact" class="nav">Contact Me</Link>
        <Switch>
          <Route exact={true} path="/">
            <Home />
          </Route>
          <Route exact={true} path="/programming">
            <Programming />
          </Route>
          <Route exact={true} path="/radio">
            <Radio />
          </Route>
          <Route exact={true} path="/games">
            <Games />
          </Route>
          <Route exact={true} path="/about">
            <About />
          </Route>
          <Route exact={true} path="/contact">
            <Contact />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
