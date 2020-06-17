import React from "react";
import classes from "./SearchPropositions.module.css";
import SearchProposition from "./SearchProposition/SearchProposition.js";

const searchPropositions = props => (
  <div className={classes.Propositions} onClick={props.log}>
    {!props.noResults && <SearchProposition products={props.products} />}
    {props.noResults && <div className={classes.NoResults}>No results</div>}
  </div>
);

export default searchPropositions;
