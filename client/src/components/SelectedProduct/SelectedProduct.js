import React, { Component } from "react";
import classes from "./SelectedProduct.module.css";
import { withRouter } from "react-router-dom";
import axios from "axios";

const url = window.location.origin + "/pictures/1.jpg";

class selectedProduct extends Component {
  state = { product: [], pathname: "" };

  componentDidMount() {
    this.getProduct();
    window.scrollTo(0, 0);
  }

  componentDidUpdate() {
    this.getProduct();
  }

  getProduct() {
    if (
      !this.state.pathname ||
      this.state.pathname !== this.props.location.pathname
    ) {
      axios
        .get("/product/" + this.props.match.params.id + ".json")
        .then(data => {
          this.setState({
            product: data.data,
            pathname: this.props.location.pathname
          });
        })
        .catch(err => console.log(err));
    }
  }

  render() {
    return (
      <div className={classes.Container}>
        {this.state.product &&
          this.state.product.map(product => {
            return (
              <>
                <div className={classes.ProductName} key={product.ref_code}>
                  <div>
                    {product.board_supplier} &nbsp;
                    {product.material} &nbsp;
                    {product.ref_code}&nbsp; &nbsp;
                  </div>
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
                <div className={classes.Details}>Details</div>
                <div className={classes.Description}>
                  <div className={classes.Bold}>Description</div>
                  <div className={classes.Text}>{product.description}</div>
                  <div className={classes.Bold}>Reference Code</div>
                  <div className={classes.Text}>{product.ref_code}</div>
                  <div className={classes.Bold}>Board Supplier</div>
                  <div className={classes.Text}>{product.board_supplier}</div>
                  <div className={classes.Bold}>Base Material</div>
                  <div className={classes.Text}>{product.base_material}</div>
                  <div className={classes.Bold}>Model</div>
                  <div className={classes.Text}>{product.model}</div>
                  <div className={classes.Bold}>Processing Temperature</div>
                  <div className={classes.Text}>
                    {product.processing_temperature}C
                  </div>
                  <div className={classes.Bold}>Material</div>
                  <div className={classes.Text}>{product.material}</div>
                </div>
              </>
            );
          })}
      </div>
    );
  }
}

export default withRouter(selectedProduct);
