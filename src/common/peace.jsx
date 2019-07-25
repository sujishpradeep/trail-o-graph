import React from "react";

const Peace = ({ peaceMarked, onPeaceClick, trailId }) => {
  const active = peaceMarked ? "awesomeActive" : "awesomeInActive";

  return (
    <React.Fragment>
      <div className="td-btn-like ">
        <i
          className={"fa fa-hand-peace-o fa-3x " + active}
          aria-hidden="true"
          onClick={() => onPeaceClick(trailId)}
        />
      </div>
    </React.Fragment>
  );
};

export default Peace;

/*
  const peaceIcon = peaceMarked ? faHandPeace : faPeaceReg;
<span
        id="trailPostSpan"
        className="peaceContainer"
        onClick={() => onPeaceClick(trailId)}
      >
        <FontAwesomeIcon icon={peaceIcon} />
        <span id="peace">{peaceCount}</span>
      </span>
      style={{ color: color }}
      */
