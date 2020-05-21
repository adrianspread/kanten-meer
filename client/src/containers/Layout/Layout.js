import React, { Fragment } from "react";
import classes from "./Layout.module.css";
import Toolbar from "../../components/Toolbar/Toolbar";

const layout = props => (
  <Fragment>
    <Toolbar />
    {props.children}
  </Fragment>
);

export default layout;
