import React from "react";
import classes from "./SearchProposition.module.css";
// import Picture from "/pictures/avatar.jpg";
import { withRouter } from "react-router-dom";
const url = window.location.origin + "/pictures/1.jpg";

const searchProposition = props => (
  <>
    {props.products.length !== 0 ? (
      <div className={classes.Container}>
        {props.products.map(product => {
          return (
            <div
              className={classes.Proposition}
              key={product.id}
              onClick={() => {
                props.history.push("/product/" + product.id);
              }}
            >
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
      </div>
    ) : null}
  </>
);

export default withRouter(searchProposition);
//////
