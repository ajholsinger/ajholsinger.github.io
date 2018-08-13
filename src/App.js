import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "../src/components/header";
import Opening from "../src/components/pages/opening";
import Portfolio from "../src/components/pages/portfolio";

const App = () => (
  <Router>
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Opening} />
        <Route exact path="/portfolio" component={Portfolio} />
      </Switch>
    </div>
  </Router>
);

export default App;
