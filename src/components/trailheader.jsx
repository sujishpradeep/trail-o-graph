import React from "react";

const TrailHeader = ({ trailName, state, height }) => {
  return (
    <div className="trail-header">
      <div className="trail-info">
        <a href="/new">
          <h3 id="trail-name">{trailName}</h3>
        </a>
        <p id="trail-state">
          {state} | {height} feet
        </p>
      </div>
      <a className="profile-picture" href="#top">
        <img
          src="https://s3.ca-central-1.amazonaws.com/example-files/ui-wigets/profile.jpg"
          alt="contributor profile"
          id="img-profile"
        />
      </a>
    </div>
  );
};

export default TrailHeader;
