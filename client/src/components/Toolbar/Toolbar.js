import React, { Fragment } from "react";
import classes from "./Toolbar.module.css";

const toolbar = props => (
  <>
    <div className={classes.Toolbar}>
      <div className={classes.ToolbarTop}>
        <div className={classes.Language}></div>
        <div className={classes.Login}>LOGIN</div>
      </div>
    </div>
  </>
);

export default toolbar;
