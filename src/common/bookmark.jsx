import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as faPeaceReg } from "@fortawesome/free-regular-svg-icons";

const BookMark = ({ trailId, bookMarked, onBookMarkClick }) => {
  const bookMarkedCheck = bookMarked ? faStar : faPeaceReg;
  const color = bookMarked ? "#e6da71" : "2D2D2D";

  return (
    <React.Fragment>
      <span onClick={() => onBookMarkClick(trailId)} id="trailPostSpan">
        <FontAwesomeIcon icon={bookMarkedCheck} style={{ color: color }} />
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
      </div>
      
        <i className="far fa-hand-peace " style={{ color: "red" }} />
        <i
          className="fas fa-hand-peace "
          data-fa-transform="shrink-2"
          style={{ color: "black" }}
        />
        
        
        
        <span
        className="fa-layers fa-fw fa-3x"
        onClick={() => onBookMarkClick(trailId)}
        id="trailPostSpan"
      >
        <FontAwesomeIcon icon={faPeaceReg} style={{ color: "2D2D2D" }} />
        <FontAwesomeIcon
          icon={faHandPeace}
          transform={abc}
          style={{ color: def }}
        />
      </span>*/
