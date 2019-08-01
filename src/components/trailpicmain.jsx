import React from "react";
import { Link } from "react-router-dom";
import { apiUrl } from "../config.json";

const TrailPicMain = ({ coverPhotoPath, trailId }) => {
  coverPhotoPath = apiUrl + "/" + coverPhotoPath;
  return (
    <Link to={`/trail/${trailId}`}>
      <div className="trail-pic">
        <img src={coverPhotoPath} alt="Trail Main" id="img-header" />
      </div>
    </Link>
  );
};

export default TrailPicMain;
