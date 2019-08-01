import React from "react";
import TrailPicMain from "./trailpicmain";
import TrailStats from "./trailstats";

const TrailCard = ({ trailCard, user, onBookMarkClick }) => {
  const bookMarked = user.bookMarked.includes(trailCard._id);

  return (
    <div>
      <div className="trail-grid-item">
        <TrailPicMain
          coverPhotoPath={trailCard.coverPhotoPath}
          trailId={trailCard._id}
        />
        <TrailStats
          trailName={trailCard.name}
          state={trailCard.state}
          trailId={trailCard._id}
          bookMarked={bookMarked}
          onBookMarkClick={onBookMarkClick}
        />
      </div>
    </div>
  );
};

export default TrailCard;

/*
<TrailHeader
trailName={trailCard.name}
state={trailCard.state}
height={trailCard.height}
trailId={trailCard._id}
/>
<TrailPicMain
coverPhoto={trailCard.coverPhoto}
trailId={trailCard._id}
/>
<TrailStats
trailId={trailCard._id}
peaceCount={trailCard.peaceCount}
peaceMarked={peaceMarked}
bookMarked={bookMarked}
onPeaceClick={onPeaceClick}
onBookMarkClick={onBookMarkClick}
/>

*/
