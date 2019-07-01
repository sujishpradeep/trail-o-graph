import React, { Component } from "react";

class TrailPicMain extends Component {
  state = {};
  render() {
    return (
      <div className="trail-pic-main">
        <img src={this.props.coverPhoto} alt="Trail Main" />
      </div>
    );
  }
}

export default TrailPicMain;
