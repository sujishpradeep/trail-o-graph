import React, { Component } from "react";
import "font-awesome/css/font-awesome.min.css";
import TrailCard from "./trailcard";

import "../App.css";

class TrailFeed extends Component {
  state = {};

  render() {
    const { trailCards, profileInfo, onBookMarkClick } = this.props;

    return (
      <div className="grid-container">
        {trailCards.map(trailCard => (
          <TrailCard
            key={trailCard._id}
            trailCard={trailCard}
            profileInfo={profileInfo}
            onBookMarkClick={onBookMarkClick}
          />
        ))}
      </div>
    );
  }
}

export default TrailFeed;
