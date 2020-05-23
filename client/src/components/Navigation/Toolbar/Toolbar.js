import React, { Fragment } from "react";
import classes from "./Toolbar.module.css";
import Languages from "../../Languages/Languages";
import Logo from "../../Logo/Logo";
import SearchBar from "../../UI/SearchBar/SearchBar";

const toolbar = props => (
  <>
    <div className={classes.Toolbar}>
      <div className={classes.ToolbarTop}>
        <div className={classes.Languages}>
          <Languages />
        </div>
        <div className={classes.Login}>LOGIN</div>
      </div>
      <div className={classes.ToolbarMiddle}>
        <Logo />
        <SearchBar />
      </div>
      <div className={classes.ToolbarBottom}></div>
    </div>
  </>
);

export default toolbar;
// <div className={classes.Tomato}></div>
// <div className={classes.Gold}></div>

// <div className={classes.Oranged}></div>

// <div
//   className={classes.Darkorange}
//   style={{ color: "white", fontSize: "800" }}
// >
//   Contact
// </div>
