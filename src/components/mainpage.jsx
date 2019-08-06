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
      </React.Fragment>
    );
  }
}

export default MainPage;
