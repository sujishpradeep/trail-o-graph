import React, { Component } from "react";
import TrailHeader from "./trailheader";
import TrailPicMain from "./trailpicmain";
import TrailStats from "./trailstats";

class TrailCard extends Component {
  state = {};
  render() {
    const trailName = this.props.trailCard.name;
    const state = this.props.trailCard.state;
    const height = this.props.trailCard.height;
    const coverPhoto = this.props.trailCard.coverPhoto;
    const peaceMakers = this.props.trailCard.peaceMakers;
    const trailId = this.props.trailCard._id;

    const peaceState = this.props.peaceState;

    return (
      <div>
        <section className="trail-container">
          <TrailHeader trailName={trailName} state={state} height={height} />
          <TrailPicMain coverPhoto={coverPhoto} />
          <TrailStats
            peaceMakers={peaceMakers}
            trailId={trailId}
            peaceState={peaceState}
            onPeaceClick={this.props.onPeaceClick}
          />
        </section>
      </div>
    );
  }
}

export default TrailCard;
