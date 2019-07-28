import React, { Component } from "react";
import { Link } from "react-router-dom";
import UserReview from "./userreview";
import http from "../services/httpservice";
import config from "../config.json";
import "../ud.css";
import { getUser } from "../services/userService";
import { getReviewsByUser } from "../services/reviewService";

class UserPage extends Component {
  state = { userInfo: {}, userReviews: [] };

  async componentDidMount() {
    const { data: userInfo } = await getUser(this.props.match.params.id);
    const { data: userReviews } = await getReviewsByUser(userInfo._id);
    this.setState({ userInfo, userReviews });
    window.scrollTo(0, 0);
  }

  handleReviewDelete = async reviewId => {
    const originalUserReviews = this.state.userReviews;
    const userReviews = this.state.userReviews.filter(r => r._id !== reviewId);
    this.setState({ userReviews });
    try {
      await http.delete(config.apiReviews + "/" + reviewId);
    } catch (ex) {
      if (ex.response && ex.response.status === 404) {
        alert("post already deleted");
      }
      this.setState({ userReviews: originalUserReviews });
    }
  };

  render() {
    let { userInfo, userReviews } = this.state;
    const { _id, name, place, bio } = userInfo;

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
          <UserReview
            key={userReview._id}
            userReview={userReview}
            onReviewDelete={this.handleReviewDelete}
          />
        ))}
      </div>
    );
  }
}

export default UserPage;
