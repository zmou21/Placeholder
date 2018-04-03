import React from "react";
import QuickSearch from "./pages/QuickSearch";
import Analysis from "./pages/Analysis";
import Home from "./pages/Home";
import Div from "./components/Dashboard";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => (
  <Router>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/search" component={QuickSearch}/>
        <Route exact path="/intrinsic" component={Analysis}/>
      </Switch>
  </Router>

);

export default App;
