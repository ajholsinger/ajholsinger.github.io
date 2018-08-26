import React from "react";
var logo = require("../../src/images/greyH.png");

const Header = () => (
  <div className="container-fluid header">
    <div className="row">
      <a href="/">
        <img
          className="col-xs-1 col-sm-1 col-md-1 col-lg-1 logo"
          src={logo}
          alt={logo}
        />
      </a>
      <div className="col-xs-9 col-sm-7 col-md-7 col-lg-7 links">
        <a href="portfolio" className="portfolio">
          Portfolio
        </a>
        <a href="about" className="about">
          About
        </a>
      </div>
    </div>
  </div>
);

export default Header;
