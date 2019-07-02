import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import { faBookmark as faBookReg } from "@fortawesome/free-regular-svg-icons";

const BookMark = ({ trailId, bookMarked, onBookMarkClick }) => {
  const bookMarkedCheck = bookMarked ? faBookmark : faBookReg;
  return (
    <span id="trailPostSpan" onClick={() => onBookMarkClick(trailId)}>
      <FontAwesomeIcon icon={bookMarkedCheck} />
      <span id="collect" />
    </span>
  );
};

export default BookMark;
