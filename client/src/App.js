import React, { Component } from "react";
import classes from "./App.module.css";
import Layout from "./containers/Layout/Layout";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>Layout Children</Layout>
      </div>
    );
  }
}

export default App;
