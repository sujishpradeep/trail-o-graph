import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import { faBookmark as faBookReg } from "@fortawesome/free-regular-svg-icons";

class BookMarked extends Component {
  state = {};
  render() {
    const bookMarked = true;
    const bookMarkedCheck = bookMarked ? faBookmark : faBookReg;
    return (
      <div>
        <button class="filter-bookmark">
          <FontAwesomeIcon icon={bookMarkedCheck} />
        </button>
      </div>
    );
  }
}

export default BookMarked;
