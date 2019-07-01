import React, { Component } from "react";
import "font-awesome/css/font-awesome.min.css";
import TrailCard from "./trailcard";
import { getTrails } from "../services/testTrailCards";
import { getUserPeaceState } from "../services/testUserInfoDb";
import "../App.css";

class TrailFeed extends Component {
  state = { trailCards: [], peaceStates: [] };

  componentDidMount() {
    const trailCards = getTrails();
    this.setState({ trailCards });
    const peaceStates = getUserPeaceState("P1");
    this.setState({ peaceStates });
  }

  render() {
    const { trailCards, peaceStates } = this.state;

    return (
      <React.Fragment>
        {trailCards.map(trailCard => (
          <TrailCard
            key={trailCard._id}
            trailCard={trailCard}
            peaceState={peaceStates.includes(trailCard._id)}
            onPeaceClick={this.handlePeaceClick}
          />
        ))}
      </React.Fragment>
    );
  }

  handlePeaceClick = trailId => {
    const originalTrailCards = this.state.trailCards;
    const peaceStates = this.state.peaceStates;
    const counter = peaceStates.includes(trailId) ? -1 : 1;

    const index = originalTrailCards.findIndex(t => t._id === trailId);
    originalTrailCards[index].peaceMakers += counter;
    const trailCards = originalTrailCards;

    if (counter === 1) {
      peaceStates.push(trailId);
    } else {
      peaceStates.splice(peaceStates.indexOf(trailId));
    }

    this.setState({ trailCards, peaceStates });
  };
}

export default TrailFeed;
