import React, { Component } from "react";
import classes from "./Main.module.css";
import Home from "../Home/Home";
import axios from "axios";

class Main extends Component {
  state = {};

  insertTest() {
    axios
      .get("/insert")
      .then(result => {
        console.log(result);
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <>
        <div className={classes.Main}>
          {!this.props.showResults && <Home />}
        </div>
      </>
    );
  }
}

export default Main;
