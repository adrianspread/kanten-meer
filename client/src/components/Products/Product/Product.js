import React from "react";
import classes from "./Product.module.css";

const url = window.location.origin + "/pictures/1.jpg";

const product = props => (
  <>
    <div className={classes.ProductTop}>{props.hits} hits</div>
    {props.products &&
      props.products.map(product => {
        return (
          <div className={classes.Product} key={product.id}>
            <div className={classes.ImageContainer}>
              <img src={url} alt="{something}" className={classes.Image} />
            </div>
            <div className={classes.ProductNameContainer}>
              {product.board_supplier}&nbsp; &nbsp;
              {product.material}&nbsp;
              {product.ref_code}
            </div>
          </div>
        );
      })}
  </>
);

export default product;
///
///
