import React, { Fragment } from "react";
import classes from "./Logo.module.css";

const logo = () => (
  <div className={classes.Logo}>
    <div className={classes.Kanten}>KANTEN</div>
    <div className={classes.And}>&</div>
    <div className={classes.Meer}>MEER</div>
  </div>
);

export default logo;
