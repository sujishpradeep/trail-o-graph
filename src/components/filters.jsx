import React, { Component } from "react";
import BookMarked from "./bookMarked";

class Filters extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div class="filterBar">
          <div>
            <BookMarked />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Filters;
