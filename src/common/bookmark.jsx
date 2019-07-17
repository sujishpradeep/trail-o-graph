import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandPeace } from "@fortawesome/free-solid-svg-icons";
import { faHandPeace as faPeaceReg } from "@fortawesome/free-regular-svg-icons";

const BookMark = ({ trailId, bookMarked, onBookMarkClick }) => {
  const bookMarkedCheck = bookMarked ? faHandPeace : faPeaceReg;
  return (
    <React.Fragment>
      <span id="trailPostSpan" onClick={() => onBookMarkClick(trailId)}>
        <FontAwesomeIcon icon={bookMarkedCheck} />
        <span id="collect" />
      </span>
    </React.Fragment>
  );
};

export default BookMark;

/*
<div class="trail-stats">
        <span id="trailPostSpan">
          <i class="fa fa-star-o fa-2x" aria-hidden="true" />
        </span>
      </div>*/
