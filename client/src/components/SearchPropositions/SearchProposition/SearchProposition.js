import React from "react";
import classes from "./SearchProposition.module.css";
// import Picture from "/pictures/avatar.jpg";

const url = window.location.origin + "/pictures/1.jpg";

const searchProposition = props => (
  <div className={classes.Container}>
    {!props.noResults &&
      props.products.map(product => {
        return (
          <div className={classes.Proposition} key={product.id}>
            <div className={classes.ImageContainer}>
              <img src={url} alt="{something}" className={classes.Image} />
            </div>
            <div className={classes.ProductNameContainer}>
              {product.ref_code}&nbsp; &nbsp;
              {product.material} &nbsp;
              {product.board_supplier}
            </div>
          </div>
        );
      })}
    {props.products.noResults && (
      <div className={classes.Proposition}>No Results</div>
    )}
  </div>
);

export default searchProposition;
