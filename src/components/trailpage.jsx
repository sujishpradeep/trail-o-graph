import React, { Component } from "react";
import { getTrailById } from "../services/testTrailCards.js";
import "../td.css";

class TrailPage extends Component {
  state = { trailInfo: {} };

  componentDidMount() {
    const trailInfo = getTrailById(this.props.match.params.id);
    console.log("trailInfo" + trailInfo);
    this.setState({ trailInfo });
  }

  render() {
    console.log("id " + this.props.match.params.id);
    const { trailInfo } = this.state;
    return (
      <div className="td-body">
        <div className="td-outer-container">
          <div className="td-desc-container ">
            <div className="td-cover-desc pl5">
              <h1 id="td-name">{trailInfo.name}</h1>
            </div>
          </div>

          <div className="td-cover-pic">
            <img
              src="https://images.unsplash.com/photo-1495613455702-836d1327ebc6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1480&q=80"
              alt="blog post header image"
              id="td-cover-img"
            />
          </div>

          <div className="td-desc-container pb10 pt10">
            <div className="td-btn-like  pl5">
              <span id="td-like-span ">
                <i className="fa fa-hand-peace-o fa-3x" aria-hidden="true" />
              </span>
            </div>
            <div className="td-like-count pr5 pl5">
              <p className="font-small">
                <b>{trailInfo.peaceCount} trailers</b>
              </p>
              <p className="font-small">said it's an awesome place</p>
            </div>
          </div>

          <div className="td-middle-container pt20 pb10">
            <div className="td-op-info pl5">
              <h3 id="td-op-hours">Opening hours</h3>
              <h4 id="td-op-day">Mon - Sat</h4>
              <p id="td-op-timing">7:00 AM to 5:00 PM</p>
              <h4 id="td-op-day">Sunday</h4>
              <p id="td-op-timing">Closed</p>
            </div>

            <div className="td-address-info pr5">
              <h3 id="td-adress-desc">Address</h3>
              <h4 id="td-address">Pitt street, Sydney 2135</h4>
              <p id="td-address-map">Map</p>
            </div>

            <div className="td-highlights-info pr5">
              <h3 id="td-highlights-hours ">What people love here</h3>
              <p id="td-highlight">Snowfall</p>
              <p id="td-highlight">Extreme terrain</p>
              <p id="td-highlight">Less explored</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TrailPage;
