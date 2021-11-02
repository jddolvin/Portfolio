import "./App.css";
import Layout from "./layout/Layout";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Layout />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
