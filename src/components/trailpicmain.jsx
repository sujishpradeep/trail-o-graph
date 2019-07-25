import React from "react";
import { Link } from "react-router-dom";

const TrailPicMain = ({ coverPhoto, trailId }) => {
  return (
    <Link to={`/trail/${trailId}`}>
      <div className="trail-pic">
        <img src={coverPhoto} alt="Trail Main" id="img-header" />
      </div>
    </Link>
  );
};

export default TrailPicMain;
