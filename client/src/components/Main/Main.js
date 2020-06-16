import React, { Component } from "react";
import classes from "./Main.module.css";
import Home from "../Home/Home";
import { Switch, Route } from "react-router-dom";

import Products from "../Products/Products";

class Main extends Component {
  state = {};

  render() {
    return (
      <div className={classes.Main}>
        <Switch>
          <Route path="/products" component={Products} />

          {/*<Route path="/product" component={Product} />
           */}

          <Route path="/" component={Home} />
        </Switch>
      </div>
    );
  }
}

export default Main;
