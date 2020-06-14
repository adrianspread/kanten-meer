import React from "react";
import classes from "./SearchPropositions.module.css";
import SearchProposition from "./SearchProposition/SearchProposition.js";

const searchPropositions = props => (
  <div className={classes.Propositions}>
    <SearchProposition products={props.products} />
  </div>
);

export default searchPropositions;
