import React, { Fragment } from "react";
import classes from "./Layout.module.css";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";

const layout = props => (
  <Fragment>
    <Toolbar />
  </Fragment>
);

export default layout;

// {props.children}
