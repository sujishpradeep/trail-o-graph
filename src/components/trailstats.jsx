import React from "react";
import { Link } from "react-router-dom";
import Bookmark from "../common/bookmark";

const TrailStats = ({
  trailName,
  state,
  trailId,
  bookMarked,
  onBookMarkClick
}) => {
  return (
    <div className="trail-footer">
      <div className="trail-info">
        <Link to={`/trail/${trailId}`} style={{ textDecoration: "none" }}>
          <h3 id="trail-name">{trailName}</h3>
        </Link>
        <p id="trail-state">{state}</p>
      </div>
      <Bookmark
        bookMarked={bookMarked}
        trailId={trailId}
        onBookMarkClick={onBookMarkClick}
      />
    </div>
  );
};

export default TrailStats;
/*
<div className="trail-stats">
  <Peace
    peaceCount={peaceCount}
    trailId={trailId}
    peaceMarked={peaceMarked}
    onPeaceClick={onPeaceClick}
  />
  <Bookmark
    bookMarked={bookMarked}
    trailId={trailId}
    onBookMarkClick={onBookMarkClick}
  />
</div>;
*/
