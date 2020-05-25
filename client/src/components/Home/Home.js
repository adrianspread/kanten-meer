import React from "react";
import classes from "./Home.module.css";
import About from "./About/About";

const home = props => (
  <div className={classes.Home}>
    <About />
  </div>
);

export default home;
