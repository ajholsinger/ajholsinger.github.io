import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/header";
import Opening from "./components/pages/opening";
import Portfolio from "./components/pages/portfolio";
import About from "./components/pages/about";
import "./app.css";

const App = () => (
  <Router>
    <div>
      <Header />
      <Route exact path="/" component={Opening} />
      <Route exact path="/portfolio" component={Portfolio} />
      <Route exact path="/about" component={About} />
    </div>
  </Router>
);

export default App;
