import React, { Component } from "react";

import TrailFeed from "./trailfeed";
import Banner from "./banner";
import Filters from "./filters";
import { getTrails } from "../services/testTrailCards";
import { getUserInfoById } from "../services/testUserInfoDb";

class MainPage extends Component {
  state = { trailCards: [], userInfo: [] };

  componentDidMount() {
    const trailCards = getTrails();
    const userInfo = getUserInfoById("P1");
    const showBookMarked = false;
    this.setState({ trailCards, userInfo, showBookMarked });
  }

  /*If input trail ID  IS present in userArray -> remove it from the user Array
    If input trail ID NOT present in userArray -> Add it to the user Array*/
  addOrRemoveFromArray = (userArray, trailId) => {
    if (userArray.includes(trailId)) {
      userArray.splice(userArray.indexOf(trailId), 1);
    } else {
      userArray.push(trailId);
    }
    return userArray;
  };

  // update bookMarked array of userInfo on bookMarkClick
  handleBookMarkClick = trailId => {
    const { userInfo } = this.state;
    let userBookMarked = userInfo.bookMarked;

    userBookMarked = this.addOrRemoveFromArray(userBookMarked, trailId);
    userInfo.bookMarked = userBookMarked;

    this.setState({ userInfo });
  };

  handleFilterBookMark = () => {
    let { showBookMarked, trailCards, userInfo } = this.state;

    showBookMarked = !showBookMarked;

    trailCards = showBookMarked
      ? (trailCards = trailCards.filter(t =>
          userInfo.bookMarked.includes(t._id)
        ))
      : getTrails();

    this.setState({ showBookMarked, trailCards });
  };

  render() {
    const { trailCards, userInfo, showBookMarked } = this.state;
    return (
      <React.Fragment>
        <Banner />
        <Filters
          onFilterBookMark={this.handleFilterBookMark}
          showBookMarked={showBookMarked}
        />
        <TrailFeed
          trailCards={trailCards}
          userInfo={userInfo}
          onBookMarkClick={this.handleBookMarkClick}
        />
      </React.Fragment>
    );
  }
}

export default MainPage;
