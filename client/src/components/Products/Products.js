import React, { Component } from "react";
import classes from "./Products.module.css";
import { withRouter } from "react-router-dom";
import axios from "axios";
import Product from "./Product/Product";

class products extends Component {
  state = { phrase: "", products: [], locationSearch: "" };

  componentDidMount() {
    this.getProducts();
  }

  componentDidUpdate() {
    this.getProducts();
  }

  getProducts() {
    if (
      !this.state.locationSearch ||
      this.state.locationSearch !== this.props.location.search
    ) {
      console.log("this.props.location.search:", this.props.location.search);

      const query = new URLSearchParams(this.props.location.search);
      let phrase;

      for (let param of query.entries()) {
        console.log(param);
        phrase = param[1];
      }

      axios
        .get("/productphrase/" + phrase)
        .then(data => {
          console.log(data.data);
          this.setState({
            phrase: phrase,
            products: data.data,
            locationSearch: this.props.location.search
          });
        })
        .catch(err => console.log(err));
    }
  }

  render() {
    return (
      <div className={classes.Container}>
        <div className={classes.ResultsFor}>
          Your search for: <b>{this.state.phrase}</b>
        </div>
        <div className={classes.FilterProductsContainer}>
          <div className={classes.Filters}>
            Search Filters like on ostermann page
          </div>
          <div className={classes.Products}>
            <Product hits={this.state.products.length} />
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(products);
