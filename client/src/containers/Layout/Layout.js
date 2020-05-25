import React from "react";
import classes from "./Layout.module.css";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import Main from "../../components/Main/Main";
import Footer from "../../components/Navigation/Footer/Footer";

const layout = props => (
  <>
    <Toolbar />
    <Main />
    <Footer />
  </>
);

export default layout;
