import React, { Component } from "react";
import classes from "./SelectedProduct.module.css";
import { withRouter } from "react-router-dom";
import axios from "axios";

const url = window.location.origin + "/pictures/1.jpg";

class selectedProduct extends Component {
  state = { product: [], pathname: "" };

  componentDidMount() {
    this.getProduct();
    // console.log(this.state.locationSearch);
    // console.log(this.props.location.search);
    // console.log(this.props.history);
    // console.log(this.props.match.params.id);
    // console.log(this.props.location.pathname);
  }

  componentDidUpdate() {
    this.getProduct();
  }

  getProduct() {
    if (
      !this.state.pathname ||
      this.state.pathname !== this.props.location.pathname
    ) {
      // console.log("get product!!");
      axios
        .get("/product/" + this.props.match.params.id)
        .then(data => {
          console.log(data.data);

          this.setState({
            product: data.data,
            pathname: this.props.location.pathname
          });
          console.log(this.state.product[0].id);
        })
        .catch(err => console.log(err));
    }
  }

  render() {
    return (
      <div className={classes.Container}>
        <div className={classes.ProductName}>
          {this.state.product.map(product => {
            return (
              <>
                {product.board_supplier} &nbsp;
                {product.material} &nbsp;
                {product.ref_code}&nbsp; &nbsp;
              </>
            );
          })}
        </div>

        <div className={classes.ProductAndOrder}>
          <div className={classes.Product}>
            <div className={classes.ImageContiner}>
              <img src={url} alt="graphic" className={classes.Image} />
            </div>
          </div>
          <div className={classes.Order}>
            <button className={classes.Button}>LOGIN & ORDER</button>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(selectedProduct);
