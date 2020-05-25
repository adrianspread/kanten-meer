import React, { Fragment, Component } from "react";
import classes from "./Main.module.css";
import Home from "../Home/Home";

class Main extends Component {
  state = {};
  render() {
    return (
      <div className={classes.Main}>
        <Home />
      </div>
    );
  }
}

export default Main;
