import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandPeace } from "@fortawesome/free-solid-svg-icons";
import { faHandPeace as faPeaceReg } from "@fortawesome/free-regular-svg-icons";

const Peace = ({ peaceCount, peaceMarked, onPeaceClick, trailId }) => {
  const peaceIcon = peaceMarked ? faHandPeace : faPeaceReg;

  return (
    <React.Fragment>
      <span
        id="trailPostSpan"
        className="peaceContainer"
        onClick={() => onPeaceClick(trailId)}
      >
        <FontAwesomeIcon icon={peaceIcon} />
        <span id="peace">{peaceCount}</span>
      </span>
    </React.Fragment>
  );
};

export default Peace;
