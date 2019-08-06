import React, { Component } from "react";
import { Link } from "react-router-dom";
import ProfileReview from "./profilereview";
import { getProfile } from "../services/profileService";
import { getReviewsByProfile, deleteReview } from "../services/reviewService";
import "../pd.css";
import { apiUrl } from "../config.json";
import auth from "../services/authservice";

class ProfilePage extends Component {
  state = { profileInfo: {}, profileReviews: [], showedit: false };

  async componentDidMount() {
    const user = auth.getCurrentUser();

    let showedit = false;
    if (user) {
      showedit = user.profileid === this.props.match.params.id ? true : false;
    }
    const { data: profileInfo } = await getProfile(this.props.match.params.id);
    const { data: profileReviews } = await getReviewsByProfile(profileInfo._id);

    profileInfo.profilePicPath = apiUrl + "/" + profileInfo.profilePicPath;

    this.setState({ profileInfo, profileReviews, showedit });
    window.scrollTo(0, 0);
  }

  handleReviewDelete = async reviewId => {
    const originalProfileReviews = this.state.profileReviews;
    const profileReviews = this.state.profileReviews.filter(
      r => r._id !== reviewId
    );
    this.setState({ profileReviews });
    try {
      await deleteReview(reviewId);
    } catch (ex) {
      if (ex.response && ex.response.status === 404) {
        alert("post already deleted");
      }
      this.setState({ profileReviews: originalProfileReviews });
    }
  };

  render() {
    let { profileInfo, profileReviews } = this.state;
    let { _id, name, place, bio, profilePicPath } = profileInfo;

    return (
      <div className="pd-body">
        <div id="pd-profile-container">
          <div id="pd-profile-header">
            <Link to={`/profile/${_id}`} style={{ textDecoration: "none" }}>
              <div className="pd-profile-pic-container ">
                <img src={profilePicPath} alt="Reviewer " id="pd-profile-pic" />
              </div>
            </Link>

            <div id="pd-profile-desc">
              <Link to={`/profile/${_id}`} style={{ textDecoration: "none" }}>
                <h2 id="pd-profile-name">{name}</h2>
              </Link>
              <p id="pd-profile-location">
                <i className="fa fa-map-marker" />
                {place}
              </p>
              <p id="pd-profile-bio">{bio}</p>
            </div>
          </div>
          {this.state.showedit && (
            <button className="btn-lowkey">
              <Link
                to={`/update/${this.state.username}`}
                style={{ textDecoration: "none", color: "black" }}
              >
                Edit profile
              </Link>
            </button>
          )}
        </div>
        <div id="trailline">
          <h2> Trail stories</h2>
        </div>
        {profileReviews.map(profileReview => (
          <ProfileReview
            key={profileReview._id}
            profileReview={profileReview}
            onReviewDelete={this.handleReviewDelete}
            showedit={this.state.showedit}
          />
        ))}
      </div>
    );
  }
}

export default ProfilePage;
