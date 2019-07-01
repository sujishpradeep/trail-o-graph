import React, { Component } from "react";

import Peace from "../common/peace";

class TrailStats extends Component {
  state = {};
  render() {
    return (
      <div className="trail-stats">
        <Peace
          peaceMakers={this.props.peaceMakers}
          trailId={this.props.trailId}
          peaceState={this.props.peaceState}
          onPeaceClick={this.props.onPeaceClick}
        />
        <span id="trailPostSpan">
          <i className="fa fa-star-o fa-7x" aria-hidden="true" />
          <span id="collect" />
        </span>
      </div>
    );
  }
}

export default TrailStats;
