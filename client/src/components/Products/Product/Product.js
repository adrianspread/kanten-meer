import React from "react";
import classes from "./Product.module.css";

const product = props => (
  <>
    <div className={classes.ProductTop}>{props.hits} hits</div>
    <div className={classes.Product}></div>
  </>
);

export default product;
///
///
