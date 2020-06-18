import React from "react";
import classes from "./Product.module.css";
import { Link } from "react-router-dom";

const url = window.location.origin + "/pictures/1.jpg";

const product = props => (
  <>
    <div className={classes.ProductTop}>{props.hits} hits</div>
    {props.products &&
      props.products.map(product => {
        return (
          <Link
            to={"/product/" + product.id}
            style={{ textDecoration: "none", color: "black" }}
          >
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
          </Link>
        );
      })}
  </>
);

export default product;
///
///
