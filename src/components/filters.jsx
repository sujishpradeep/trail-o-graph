import React, { Component } from "react";
import BookMarked from "./bookMarked";

class Filters extends Component {
  state = {};

  render() {
    const { onFilterBookMark, showBookMarked } = this.props;
    return (
      <React.Fragment>
        <div className="filterBar">
          <div onClick={onFilterBookMark}>
            <BookMarked showBookMarked={showBookMarked} />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Filters;
