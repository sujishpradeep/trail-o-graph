import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
//import { faBookmark as faBookReg } from "@fortawesome/free-regular-svg-icons";

class BookMarked extends Component {
  state = {};
  render() {
    let filterbookMarkicon = this.props.showBookMarked
      ? "filterbookMarkiconactive"
      : "filterbookMarkiconinactive";

    filterbookMarkicon = "filter-bookmark " + filterbookMarkicon;

    return (
      <div>
        <button className={filterbookMarkicon}>
          <FontAwesomeIcon icon={faBookmark} className="bookMarkedShadow" />
        </button>
      </div>
    );
  }
}

export default BookMarked;
