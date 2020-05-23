import React from "react";
import classes from "./Languages.module.css";
import Dutch from "../../assets/Languages/dutch.png";
import French from "../../assets/Languages/french.png";
import German from "../../assets/Languages/german.png";

const languages = proprs => (
  <>
    <img src={Dutch} alt="dutch" className={classes.Language} />
    <img src={French} alt="French" className={classes.Language} />
    <img src={German} alt="German" className={classes.Language} />
  </>
);

export default languages;
