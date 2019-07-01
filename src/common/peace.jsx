import React, { Component } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faHandPeace } from "@fortawesome/free-solid-svg-icons";

import { faHandPeace as faHandPeaceReglar } from "@fortawesome/free-regular-svg-icons";

class Peace extends Component {
  state = {};
  render() {
    let peaceCount = this.props.peaceMakers;

    console.log(
      "peace common " + this.props.trailId + " " + this.props.peaceState
    );

    const peaceIcon = this.props.peaceState ? faHandPeace : faHandPeaceReglar;

    return (
      <React.Fragment>
        <span
          id="trailPostSpan"
          className="peaceContainer"
          onClick={() => this.props.onPeaceClick(this.props.trailId)}
        >
          <FontAwesomeIcon icon={peaceIcon} />
          <span id="peace">{peaceCount}</span>
        </span>
      </React.Fragment>
    );
  }
}

export default Peace;
