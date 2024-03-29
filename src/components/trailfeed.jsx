import React, { Component } from "react";
import "font-awesome/css/font-awesome.min.css";
import TrailCard from "./trailcard";

import "../App.css";

class TrailFeed extends Component {
  state = {};

  render() {
    const { trailCards, user, onBookMarkClick } = this.props;

    return (
      <div className="grid-container">
        {trailCards.map(trailCard => (
          <TrailCard
            key={trailCard._id}
            trailCard={trailCard}
            user={user}
            onBookMarkClick={onBookMarkClick}
          />
        ))}
      </div>
    );
  }
}

export default TrailFeed;
