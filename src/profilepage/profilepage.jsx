import React, { Component } from "react";
import { Link } from "react-router-dom";
import ProfileReview from "./profilereview";
import { getProfile } from "../services/profileService";
import { getReviewsByProfile, deleteReview } from "../services/reviewService";
import "../pd.css";

class ProfilePage extends Component {
  state = { profileInfo: {}, profileReviews: [] };

  async componentDidMount() {
    const { data: profileInfo } = await getProfile(this.props.match.params.id);
    const { data: profileReviews } = await getReviewsByProfile(profileInfo._id);
    this.setState({ profileInfo, profileReviews });
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
    const { _id, name, place, bio } = profileInfo;

    return (
      <div className="pd-body">
        <div id="pd-profile-container">
          <div id="pd-profile-header">
            <Link to={`/profile/${_id}`} style={{ textDecoration: "none" }}>
              <div className="pd-profile-pic-container ">
                <img
                  src="https://images.unsplash.com/photo-1495613455702-836d1327ebc6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1480&q=80"
                  alt="Reviewer "
                  id="pd-profile-pic"
                />
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
        </div>
        <div id="trailline">
          <h2> Trail stories</h2>
        </div>
        {profileReviews.map(profileReview => (
          <ProfileReview
            key={profileReview._id}
            profileReview={profileReview}
            onReviewDelete={this.handleReviewDelete}
          />
        ))}
      </div>
    );
  }
}

export default ProfilePage;