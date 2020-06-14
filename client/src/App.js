import React, { Component } from "react";
import classes from "./App.module.css";
import Layout from "./hoc/Layout/Layout";
import Footer from "./components/Navigation/Footer/Footer";
import Main from "./components/Main/Main";

class App extends Component {
  render() {
    return (
      <>
        <Layout>
          <Main />
          <Footer />
        </Layout>
      </>
    );
  }
}

export default App;
