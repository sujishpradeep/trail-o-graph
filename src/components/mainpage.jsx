import React, { Component } from "react";
import TrailFeed from "./trailfeed";
import Banner from "./banner";
import Filters from "./filters";
import { getTrails, postTrails } from "../services/trailService";

import { addOrRemoveFromArray } from "../generic/arrays";
import { updateUserBookMarked, getUser } from "../services/authservice";

class MainPage extends Component {
  state = { trailCards: [], user: { bookMarked: [] } };

  async componentDidMount() {
    const { data: trailCards } = await getTrails();
    if (this.props.user) {
      const { data: user } = await getUser(this.props.user.username);
      this.setState({ user });
    }

    const showBookMarked = false;
    this.setState({ trailCards, showBookMarked });
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
    const { user } = this.state;
    if (!user.username) {
      window.location = "/login";
      return;
    }
    let userBookMarked = user.bookMarked || [];
    userBookMarked = addOrRemoveFromArray(userBookMarked, trailId);
    user.bookMarked = userBookMarked;
    this.setState({ user });
    await updateUserBookMarked(user.username, user.bookMarked);
  };

  handleFilterBookMark = async () => {
    let { showBookMarked, trailCards, user } = this.state;
    showBookMarked = !showBookMarked;
    const { data: originalTrailCards } = await getTrails();
    trailCards = showBookMarked
      ? (trailCards = trailCards.filter(t => user.bookMarked.includes(t._id)))
      : originalTrailCards;
    this.setState({ showBookMarked, trailCards });
  };

  render() {
    const { trailCards, user, showBookMarked } = this.state;
    return (
      <React.Fragment>
        <Banner />
        <Filters
          onFilterBookMark={this.handleFilterBookMark}
          showBookMarked={showBookMarked}
        />
        <TrailFeed
          trailCards={trailCards}
          user={user}
          onBookMarkClick={this.handleBookMarkClick}
        />
        <button onClick={this.handleAddTrail}>add</button>
      </React.Fragment>
    );
  }
}

export default MainPage;
