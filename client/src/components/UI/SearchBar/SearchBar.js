import React from "react";
import classes from "./SearchBar.module.css";
import Search from "../../../assets/UI/search.svg";

const searchbar = props => (
  <div className={classes.Container}>
    <input className={classes.Input} autoFocus />
    <div className={classes.Button}>
      <img src={Search} className={classes.SearchIcon} />
    </div>
  </div>
);

export default searchbar;
