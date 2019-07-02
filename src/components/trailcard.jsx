import React from "react";
import TrailHeader from "./trailheader";
import TrailPicMain from "./trailpicmain";
import TrailStats from "./trailstats";

const TrailCard = ({ trailCard, userInfo, onPeaceClick, onBookMarkClick }) => {
  const peaceMarked = userInfo.peaceMarked.includes(trailCard._id);
  const bookMarked = userInfo.bookMarked.includes(trailCard._id);

  return (
    <div>
      <section className="trail-container">
        <TrailHeader
          trailName={trailCard.name}
          state={trailCard.state}
          height={trailCard.height}
        />
        <TrailPicMain coverPhoto={trailCard.coverPhoto} />
        <TrailStats
          trailId={trailCard._id}
          peaceCount={trailCard.peaceCount}
          peaceMarked={peaceMarked}
          bookMarked={bookMarked}
          onPeaceClick={onPeaceClick}
          onBookMarkClick={onBookMarkClick}
        />
      </section>
    </div>
  );
};

export default TrailCard;
