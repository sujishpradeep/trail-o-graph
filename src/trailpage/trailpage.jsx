import React, { Component } from "react";
import { Link } from "react-router-dom";
import TrailReview from "./trailreview";
import Peace from "../common/peace";
import { addOrRemoveFromArray } from "../generic/arrays";
import { getTrail, updateTrailPeace } from "../services/trailService";
import { getProfile, updateProfilePeace } from "../services/profileService";
import { getReviewsByTrail } from "../services/reviewService";
import "../td.css";

class TrailPage extends Component {
  state = { trailInfo: {}, profileInfo: {}, trailReviews: [] };

  async componentDidMount() {
    const { data: trailInfo } = await getTrail(this.props.match.params.id);
    const { data: profileInfo } = await getProfile("P1");
    const { data: trailReviews } = await getReviewsByTrail(trailInfo._id);
    this.setState({ profileInfo, trailInfo, trailReviews });
    window.scrollTo(0, 0);
  }

  handlePeaceClick = async trailId => {
    const { trailInfo, profileInfo } = this.state;
    let profilePeaceMarked = profileInfo.peaceMarked;

    //onPeaceClick -> add 1 to peaceCount of the trail, if profile has not peaceMarked in original State,
    //                reduce 1 from peaceCount if profile has already peaceMarked in original State
    const counter = profilePeaceMarked.includes(trailId) ? -1 : 1;
    trailInfo.peaceCount += counter;

    const peaceMarked = addOrRemoveFromArray(profilePeaceMarked, trailId);
    profileInfo.peaceMarked = peaceMarked;
    this.setState({ trailInfo, profileInfo });

    await updateTrailPeace(trailInfo._id, counter);
    await updateProfilePeace(profileInfo._id, peaceMarked);
  };

  render() {
    const { trailInfo, profileInfo, trailReviews } = this.state;
    const { _id, name, peaceCount, height } = trailInfo;

    const peaceMarked =
      Object.keys(profileInfo).length === 0
        ? false
        : profileInfo.peaceMarked.includes(_id);

    return (
      <div className="td-body">
        <div className="td-outer-container">
          <div className="td-name-container ">
            <div className="td-cover-desc pl5">
              <Link to={`/trail/${_id}`} style={{ textDecoration: "none" }}>
                <h1 id="td-name">{name}</h1>
              </Link>
            </div>
          </div>

          <div className="td-cover-pic">
            <img
              src="https://images.unsplash.com/photo-1495555694070-b0fe5bcd2576?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
              alt="blog post header "
              id="td-cover-img"
            />
          </div>

          <div className="td-desc-container pb10 pt10 pl5 pr5">
            <Peace
              trailId={_id}
              peaceMarked={peaceMarked}
              onPeaceClick={this.handlePeaceClick}
            />
            <div className="td-like-count pl5">
              <p className="font-small">
                <b>{peaceCount} trailers</b>
              </p>
              <p className="font-small">said it's an awesome place</p>
            </div>
            <div className="td-height">
              <h2>{height} feet</h2>
            </div>
          </div>

          <div className="td-middle-container  pb10 pt5 pl5 pr5">
            <div className="td-address-info ">
              <h3 id="td-adress-desc mb5">Location</h3>
              <p id="td-address">Pitt street, Sydney 2135</p>
              <br />
              <h4 id="td-address-map">Map</h4>
            </div>

            <div className="td-op-info ">
              <h3 id="td-op-hours mb5">Timings</h3>
              <h4 id="td-op-day">Mon - Sat</h4>
              <p id="td-op-timing">7:00 AM to 5:00 PM</p>
              <h4 id="td-op-day">Sunday</h4>
              <p id="td-op-timing">Closed</p>
            </div>

            <div className="td-highlights-info">
              <h3 id="td-highlights-hours mb5">What people love here</h3>
              <p id="td-highlight">
                <i className="fa fa-angle-double-right arrow" />
                Snowfall
              </p>
              <p id="td-highlight">
                <i className="fa fa-angle-double-right arrow" />
                Extreme terrain
              </p>
              <p id="td-highlight">
                <i className="fa fa-angle-double-right arrow" />
                Less explored
              </p>
            </div>
          </div>

          <div className="td-exp-container  ">
            <h3 id="td-exp">Trail stories</h3>
          </div>
          {trailReviews.map(reviewInfo => (
            <TrailReview key={reviewInfo._id} reviewInfo={reviewInfo} />
          ))}
        </div>
      </div>
    );
  }
}

export default TrailPage;