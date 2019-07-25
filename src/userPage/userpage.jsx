import React, { Component } from "react";
import { Link } from "react-router-dom";

import { getUserInfoById } from "../services/testUserInfoDb";
import "../ud.css";
import UserReview from "./userreview";
import { getReviewByUser } from "../services/testReviewDb";

class UserPage extends Component {
  state = { userInfo: {} };

  componentDidMount() {
    const userInfo = getUserInfoById(this.props.match.params.id);
    console.log("userInfo ", userInfo);
    this.setState({ userInfo });
    window.scrollTo(0, 0);
  }

  render() {
    const { userInfo } = this.state;
    const { _id, name, place, bio } = userInfo;
    const userReviews = getReviewByUser(_id);
    console.log("userReview 2", userReviews);

    return (
      <div className="ud-body">
        <div id="ud-profile-container">
          <div id="ud-profile-header">
            <Link to={`/user/${_id}`} style={{ textDecoration: "none" }}>
              <div className="ud-profile-pic ">
                <img
                  src="https://images.unsplash.com/photo-1495613455702-836d1327ebc6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1480&q=80"
                  alt="Reviewer "
                  id="ud-user-profile-pic"
                />
              </div>
            </Link>
            <div id="ud-profile-desc">
              <Link to={`/user/${_id}`} style={{ textDecoration: "none" }}>
                <h2 id="ud-profile-name">{name}</h2>
              </Link>
              <p id="ud-profile-location">
                <i className="fa fa-map-marker" />
                {place}
              </p>
              <p id="ud-profile-bio">{bio}</p>
            </div>
          </div>
        </div>
        <div id="trailline">
          <h2> Trail stories</h2>
        </div>
        {userReviews.map(userReview => (
          <UserReview key={userReview._id} userReview={userReview} />
        ))}
      </div>
    );
  }
}

export default UserPage;
