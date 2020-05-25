import React, { Fragment } from "react";
import classes from "./Layout.module.css";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import Main from "../../components/Main/Main";

const layout = props => (
  <Fragment>
    <Toolbar />
    <Main />
  </Fragment>
);

export default layout;

// {props.children}
