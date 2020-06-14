import React from "react";

class Dropdown extends React.Component {
  state = {
    open: false
  };

  toggleDropdown() {
    this.setState({ open: !this.state.open });
  }

  render() {
    return (
      <div
        style={{ border: "1px solid #CCC" }}
        onBlur={() => this.toggleDropdown()}
        onFocus={() => this.toggleDropdown()}
        tabIndex="0"
      >
        Dropdown
        {this.state.open && (
          <div>
            <div>Red</div>
            <div>Green</div>
            <div>Blue</div>
          </div>
        )}
      </div>
    );
  }
}

export default Dropdown;
