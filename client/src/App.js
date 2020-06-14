import React, { Component } from "react";
import classes from "./App.module.css";
import Layout from "./hoc/Layout/Layout";
import Footer from "./components/Navigation/Footer/Footer";
import Main from "./components/Main/Main";
import { BrowserRouter } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Layout>
            <Main />
            <Footer />
          </Layout>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
