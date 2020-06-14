import React from "react";
import classes from "./SearchProposition.module.css";
// import Picture from "/pictures/avatar.jpg";

const url = window.location.origin + "/pictures/1.jpg";

const searchProposition = props => (
  <div className={classes.Container}>
    {props.products.map(products => {
      return (
        <div className={classes.Proposition}>
          <div className={classes.ImageContainer}>
            <img src={url} alt="{something}" className={classes.Image} />
          </div>
          <div className={classes.ProductNameContainer}>
            {products.board_supplier}
          </div>
        </div>
      );
    })}
  </div>
);

export default searchProposition;
