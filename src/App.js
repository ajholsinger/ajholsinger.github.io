import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "../src/components/header";
import Opening from "../src/components/pages/opening";
import Portfolio from "../src/components/pages/portfolio";
import About from "../src/components/pages/about";

const App = () => (
  <Router>
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Opening} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/about" component={About} />
      </Switch>
    </div>
  </Router>
);

export default App;
