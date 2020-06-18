import React from "react";
import classes from "./Toolbar.module.css";
import Languages from "../../Languages/Languages";
import Logo from "../../Logo/Logo";
import logoStyle from "../../Logo/Logo.module.css";
import SearchBar from "../../UI/SearchBar/SearchBar";
import { Link } from "react-router-dom";

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
        <Link to="/" style={{ color: "black", textDecoration: "none" }}>
          <Logo logoStyle={logoStyle} />
        </Link>
        <SearchBar />
      </div>

      <div className={classes.ToolbarBottom}>
        <ul>
          <li>
            <p>Kantenband</p>
            <ul>
              <li>
                <p>ABS</p>
              </li>
              <li>
                <p>FINEER</p>
              </li>
              <li>
                <p>PVC</p>
              </li>
            </ul>
          </li>
          <li>
            <p>Lijm machinaal</p>
            <ul>
              <li>
                <p>EWA</p>
              </li>
              <li>
                <p>PUR</p>
              </li>
              <li>
                <p>POLYFINE</p>
              </li>
            </ul>
          </li>
          <li>
            <p>Lijm andere</p>
            <ul>
              <li>
                <p>HOUTLIJM</p>
              </li>
              <li>
                <p>LAKLIJM</p>
              </li>
              <li>
                <p>SPUITLIJM</p>
              </li>
            </ul>
          </li>
          <li>
            <p>Laden geleiders</p>
          </li>
        </ul>
      </div>
    </div>
  </>
);

export default toolbar;
