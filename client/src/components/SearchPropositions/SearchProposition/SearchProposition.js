import React from "react";
import classes from "./SearchProposition.module.css";

import Highlighter from "react-highlight-words";

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
                <Highlighter
                  unhighlightClassName={classes.ProductText}
                  searchWords={props.searchPhrase.split(" ")}
                  autoEscape={true}
                  textToHighlight={
                    product.ref_code +
                    " " +
                    product.material +
                    " " +
                    product.board_supplier
                  }
                />
              </div>
            </div>
          );
        })}
      </div>
    ) : null}
  </>
);

export default withRouter(searchProposition);
