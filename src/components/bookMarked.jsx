import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as faStarReg } from "@fortawesome/free-regular-svg-icons";

class BookMarked extends Component {
  state = {};
  render() {
    let filterbookMarkicon = this.props.showBookMarked
      ? "filterbookMarkiconactive"
      : "filterbookMarkiconinactive";

    filterbookMarkicon = "filter-bookmark " + filterbookMarkicon;

    let faBookmarkIcon = this.props.showBookMarked ? faStar : faStarReg;

    return (
      <div>
        <button className={filterbookMarkicon}>
          <FontAwesomeIcon icon={faBookmarkIcon} className="bookMarkedShadow" />
        </button>
      </div>
    );
  }
}

export default BookMarked;
