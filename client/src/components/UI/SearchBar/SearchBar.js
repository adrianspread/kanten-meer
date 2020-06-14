import React, { Component } from "react";
import classes from "./SearchBar.module.css";
import Search from "../../../assets/UI/search.svg";
import SearchPropositions from "../../SearchPropositions/SearchPropositions";
import axios from "axios";

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
          />
        </div>
      </div>
    );
  }
}

export default searchbar;
