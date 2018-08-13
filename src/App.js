import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "../src/components/header";
import Opening from "../src/components/pages/opening";
import Portfolio from "../src/components/pages/portfolio";

const App = () => (
  <Router>
    <div>
      <Header />
      <Route exact path="/" component={Opening} />
      <Route exact path="/portfolio" component={Portfolio} />
    </div>
  </Router>
);

export default App;
