import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../td.css";
import Review from "./review";
import Peace from "../common/peace";
import http from "../services/httpservice";
import { apiTrails, apiUsers, apiReviews } from "../config.json";

class TrailPage extends Component {
  state = { trailInfo: {}, userInfo: {}, trailReviews: [] };

  async componentDidMount() {
    const { data: trailInfo } = await http.get(
      apiTrails + "/" + this.props.match.params.id
    );
    const { data: userInfo } = await http.get(`${apiUsers}/P1`);

    const { data: trailReviews } = await http.get(
      apiReviews + "/trails/" + trailInfo._id
    );
    this.setState({ userInfo, trailInfo, trailReviews });
    window.scrollTo(0, 0);
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

  // update peaceCount of trailCard and peaceMarked array of userInfo on peaceClick
  handlePeaceClick = async trailId => {
    const { trailInfo, userInfo } = this.state;

    let userPeaceMarked = userInfo.peaceMarked;

    //onPeaceClick -> add 1 to peaceCount of the trail, if user has not peaceMarked in original State,
    //                reduce 1 from peaceCount if user has already peaceMarked in original State
    const counter = userPeaceMarked.includes(trailId) ? -1 : 1;

    trailInfo.peaceCount += counter;
    const peaceMarked = this.addOrRemoveFromArray(userPeaceMarked, trailId);
    userInfo.peaceMarked = peaceMarked;
    this.setState({ trailInfo, userInfo });

    await http.put(apiTrails + "/peace/" + trailInfo._id, {
      counter: counter
    });
    await http.put(apiUsers + "/peace/" + userInfo._id, peaceMarked);
  };

  render() {
    const { trailInfo, userInfo, trailReviews } = this.state;
    const { _id, name, peaceCount, height } = trailInfo;
    const peaceMarked =
      Object.keys(userInfo).length === 0
        ? false
        : userInfo.peaceMarked.includes(_id);

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
            <Review key={reviewInfo._id} reviewInfo={reviewInfo} />
          ))}
        </div>
      </div>
    );
  }
}

export default TrailPage;
