import React, { Component } from "react";
import TrailFeed from "./trailfeed";
import Banner from "./banner";
import Filters from "./filters";
import { getTrails, postTrails } from "../services/trailService";
import {
  getProfile,
  updateProfileBookMarked
} from "../services/profileService";
import { addOrRemoveFromArray } from "../generic/arrays";

class MainPage extends Component {
  state = { trailCards: [], profileInfo: {} };

  async componentDidMount() {
    const { data: trailCards } = await getTrails();
    const { data: profileInfo } = await getProfile("P1");
    const showBookMarked = false;
    this.setState({ trailCards, profileInfo, showBookMarked });
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
    const { profileInfo } = this.state;
    let profileBookMarked = profileInfo.bookMarked;
    profileBookMarked = addOrRemoveFromArray(profileBookMarked, trailId);
    profileInfo.bookMarked = profileBookMarked;
    this.setState({ profileInfo });
    await updateProfileBookMarked(profileInfo._id, profileInfo.bookMarked);
  };

  handleFilterBookMark = async () => {
    let { showBookMarked, trailCards, profileInfo } = this.state;
    showBookMarked = !showBookMarked;
    const { data: originalTrailCards } = await getTrails();
    trailCards = showBookMarked
      ? (trailCards = trailCards.filter(t =>
          profileInfo.bookMarked.includes(t._id)
        ))
      : originalTrailCards;
    this.setState({ showBookMarked, trailCards });
  };

  render() {
    const { trailCards, profileInfo, showBookMarked } = this.state;

    return (
      <React.Fragment>
        <Banner />
        <Filters
          onFilterBookMark={this.handleFilterBookMark}
          showBookMarked={showBookMarked}
        />
        <TrailFeed
          trailCards={trailCards}
          profileInfo={profileInfo}
          onBookMarkClick={this.handleBookMarkClick}
        />
        <button onClick={this.handleAddTrail}>add</button>
      </React.Fragment>
    );
  }
}

export default MainPage;
