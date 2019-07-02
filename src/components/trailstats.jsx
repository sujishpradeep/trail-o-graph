import React from "react";

import Peace from "../common/peace";
import Bookmark from "../common/bookmark";

const TrailStats = ({
  peaceCount,
  trailId,
  peaceMarked,
  bookMarked,
  onPeaceClick,
  onBookMarkClick
}) => {
  return (
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
    </div>
  );
};

export default TrailStats;
