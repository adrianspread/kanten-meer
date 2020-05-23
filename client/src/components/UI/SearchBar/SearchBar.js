import React from "react";
import classes from "./SearchBar.module.css";
import Search from "../../../assets/UI/search.svg";

const searchbar = props => (
  <div className={classes.Container}>
    <input
      className={classes.Input}
      autoFocus
      placeholder={"Search for product name, term or board manufacturer"}
    />
    <div className={classes.Button}>
      <img src={Search} className={classes.SearchIcon} alt={"search icon"} />
    </div>
  </div>
);

export default searchbar;
