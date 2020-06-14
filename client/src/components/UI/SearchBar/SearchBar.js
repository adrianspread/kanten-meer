import React, { Component } from "react";
import classes from "./SearchBar.module.css";
import Search from "../../../assets/UI/search.svg";
import SearchPropositions from "../../SearchPropositions/SearchPropositions";
import axios from "axios";
import { withRouter } from "react-router-dom";

class searchbar extends Component {
  state = {
    searchPhrase: "",
    products: [],
    dropDown: false
  };
  toggleDropdown() {
    this.setState({ dropDown: !this.state.dropDown });
  }

  getProducts = event => {
    this.setState({ ...this.state, searchPhrase: event.target.value });
    axios
      .get("/productphrase/" + event.target.value)
      .then(data => {
        console.log(data.data);
        this.setState({ ...this.state, products: data.data });
      })
      .catch(err => console.log(err));
  };

  showProducts = () => {
    console.log(this.state.searchPhrase);

    this.props.history.push({
      pathname: "/products",
      search: "?phrase=" + this.state.searchPhrase
    });
  };

  render() {
    return (
      <div className={classes.Container}>
        <div
          className={classes.InputContainer}
          onBlur={() => this.toggleDropdown()}
          onFocus={() => this.toggleDropdown()}
          tabIndex="0"
        >
          <input
            className={classes.Input}
            autoFocus
            placeholder={"Search for product name, term or board manufacturer"}
            onChange={this.getProducts}
          />
          {this.state.dropDown && (
            <SearchPropositions products={this.state.products} />
          )}
        </div>

        <div className={classes.Button}>
          <img
            src={Search}
            className={classes.SearchIcon}
            alt={"search icon"}
            onClick={this.showProducts}
          />
        </div>
      </div>
    );
  }
}

export default withRouter(searchbar);
