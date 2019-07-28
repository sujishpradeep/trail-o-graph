import React, { Component } from "react";
import TrailFeed from "./trailfeed";
import Banner from "./banner";
import Filters from "./filters";
import http from "../services/httpservice";
import { apiTrails, apiUsers } from "../config.json";

class MainPage extends Component {
  state = { trailCards: [], userInfo: {} };

  async componentDidMount() {
    const { data: trailCards } = await http.get(apiTrails);
    const { data: userInfo } = await http.get(`${apiUsers}/P1`);
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
    await http.post(apiTrails, trailCard);
  };

  handleBookMarkClick = async trailId => {
    const { userInfo } = this.state;
    let userBookMarked = userInfo.bookMarked;
    userBookMarked = this.addOrRemoveFromArray(userBookMarked, trailId);
    userInfo.bookMarked = userBookMarked;
    this.setState({ userInfo });
    const bookMarked = userInfo.bookMarked;
    await http.put(`${apiUsers}/${userInfo._id}`, bookMarked);
  };

  addOrRemoveFromArray = (arrayIn, inputId) => {
    if (arrayIn.includes(inputId)) {
      arrayIn.splice(arrayIn.indexOf(inputId), 1);
    } else {
      arrayIn.push(inputId);
    }
    return arrayIn;
  };

  handleFilterBookMark = async () => {
    let { showBookMarked, trailCards, userInfo } = this.state;
    showBookMarked = !showBookMarked;
    const { data: originalTrailCards } = await http.get(apiTrails);
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
