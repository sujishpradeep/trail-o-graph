import React, { Component } from "react";
import "font-awesome/css/font-awesome.min.css";
import TrailCard from "./trailcard";
import { getTrails } from "../services/testTrailCards";
import { getUserInfoById } from "../services/testUserInfoDb";
import "../App.css";

class TrailFeed extends Component {
  state = { trailCards: [], userInfo: [] };

  componentDidMount() {
    const trailCards = getTrails();
    const userInfo = getUserInfoById("P1");
    this.setState({ trailCards, userInfo });
  }

  /*If input trail ID  IS present in userArray -> remove it from the user Array
    If input trail ID NOT present in userArray -> Add it to the user Array*/
  addOrRemoveFromArray = (userArray, trailId) => {
    if (userArray.includes(trailId)) {
      userArray.splice(userArray.indexOf(trailId));
    } else {
      userArray.push(trailId);
    }
    return userArray;
  };

  render() {
    const { trailCards, userInfo } = this.state;

    return (
      <React.Fragment>
        {trailCards.map(trailCard => (
          <TrailCard
            key={trailCard._id}
            trailCard={trailCard}
            userInfo={userInfo}
            onPeaceClick={this.handlePeaceClick}
            onBookMarkClick={this.handleBookMarkClick}
          />
        ))}
      </React.Fragment>
    );
  }

  // update peaceCount of trailCard and peaceMarked array of userInfo on peaceClick
  handlePeaceClick = trailId => {
    const { trailCards, userInfo } = this.state;

    let userPeaceMarked = userInfo.peaceMarked;

    //onPeaceClick -> add 1 to peaceCount of the trail, if user has not peaceMarked in original State,
    //                reduce 1 from peaceCount if user has already peaceMarked in original State
    const counter = userPeaceMarked.includes(trailId) ? -1 : 1;
    const index = trailCards.findIndex(t => t._id === trailId);
    trailCards[index].peaceCount += counter;

    userPeaceMarked = this.addOrRemoveFromArray(userPeaceMarked, trailId);
    userInfo.peaceMarked = userPeaceMarked;

    this.setState({ trailCards, userInfo });
  };

  // update bookMarked array of userInfo on bookMarkClick
  handleBookMarkClick = trailId => {
    const { userInfo } = this.state;
    let userBookMarked = userInfo.bookMarked;

    userBookMarked = this.addOrRemoveFromArray(userBookMarked, trailId);
    userInfo.bookMarked = userBookMarked;

    this.setState({ userInfo });
  };
}

export default TrailFeed;
