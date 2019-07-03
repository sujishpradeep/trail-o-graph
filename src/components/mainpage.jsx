import React, { Component } from "react";
import NavBar from "./navbar";
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
      userArray.splice(userArray.indexOf(trailId));
    } else {
      userArray.push(trailId);
    }
    return userArray;
  };

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
        <NavBar />
        <Banner />
        <Filters
          onFilterBookMark={this.handleFilterBookMark}
          showBookMarked={showBookMarked}
        />
        <TrailFeed
          trailCards={trailCards}
          userInfo={userInfo}
          onPeaceClick={this.handlePeaceClick}
          onBookMarkClick={this.handleBookMarkClick}
        />
      </React.Fragment>
    );
  }
}

export default MainPage;
