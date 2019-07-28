import React, { Component } from "react";
import TrailFeed from "./trailfeed";
import Banner from "./banner";
import Filters from "./filters";
import { getTrails, postTrails } from "../services/trailService";
import { getUser, updateUserBookMarked } from "../services/userService";
import { addOrRemoveFromArray } from "../generic/arrays";

class MainPage extends Component {
  state = { trailCards: [], userInfo: {} };

  async componentDidMount() {
    const { data: trailCards } = await getTrails();
    const { data: userInfo } = await getUser("P1");
    const showBookMarked = false;
    this.setState({ trailCards, userInfo, showBookMarked });
  }

  handleAddTrail = async () => {
    const trailCard = {
      _id: "A5",
      name: "Shimla",
      state: "Himachal Pradesh",
      height: 7457,
      publishDate: "2018-01-03T19:04:28.809Z",
      coverPhoto: "/images/ziro.jpeg",
      coverPhotoUploader: "Sujish",
      peaceCount: 700
    };
    const trailCards = [trailCard, ...this.state.trailCards];
    this.setState({ trailCards });
    await postTrails(trailCard);
  };

  handleBookMarkClick = async trailId => {
    const { userInfo } = this.state;
    let userBookMarked = userInfo.bookMarked;
    userBookMarked = addOrRemoveFromArray(userBookMarked, trailId);
    userInfo.bookMarked = userBookMarked;
    this.setState({ userInfo });
    await updateUserBookMarked(userInfo._id, userInfo.bookMarked);
  };

  handleFilterBookMark = async () => {
    let { showBookMarked, trailCards, userInfo } = this.state;
    showBookMarked = !showBookMarked;
    const { data: originalTrailCards } = await getTrails();
    trailCards = showBookMarked
      ? (trailCards = trailCards.filter(t =>
          userInfo.bookMarked.includes(t._id)
        ))
      : originalTrailCards;
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
        <button onClick={this.handleAddTrail}>add</button>
      </React.Fragment>
    );
  }
}

export default MainPage;
