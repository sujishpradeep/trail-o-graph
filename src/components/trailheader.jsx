import React, { Component } from "react";

class TrailHeader extends Component {
  state = {};
  render() {
    return (
      <div className="trail-header">
        <div className="trail-info">
          <h3 id="trail-name">{this.props.trailName}</h3>
          <p id="trail-state">
            {this.props.state} | {this.props.height} feet
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
  }
}

export default TrailHeader;
