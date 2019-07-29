import React from "react";
import { Link } from "react-router-dom";

const ProfileReview = ({ profileReview, onReviewDelete }) => {
  return (
    <div className="pd-outer-container">
      <div className="pd-review-container  ">
        <div className="pd-review-header  ">
          <Link
            to={`/trail/${profileReview.trail_id}`}
            style={{ textDecoration: "none" }}
          >
            <img
              src="https://images.unsplash.com/photo-1495613455702-836d1327ebc6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1480&q=80"
              alt="Trail "
              id="pd-trail-pic"
            />
          </Link>
          <div className="pd-trail-name">
            <Link
              to={`/trail/${profileReview.trail_id}`}
              style={{ textDecoration: "none" }}
            >
              <h2 id="profile-name">{profileReview.trail_name}</h2>
            </Link>
            <p>{profileReview.trail_state}</p>
          </div>
          <div id="pd-trail-height">
            <h2> {profileReview.trail_height} feet</h2>
          </div>
        </div>
        <div className="pd-review-content  ">
          <p>{profileReview.content}</p>

          <p>
            Amazing place to visit with family. The place is kids friendly,
            although one cannot take pets along. The mistic sunrise just
            enchants the eye and makes it worth the trek.
          </p>
        </div>
        <div id="pd-review-photos">
          <img
            src="https://images.unsplash.com/photo-1495613455702-836d1327ebc6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1480&q=80"
            alt="Reviewer "
            id="pd-rev-pic"
          />
          <img
            src="https://images.unsplash.com/photo-1495613455702-836d1327ebc6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1480&q=80"
            alt="Reviewer "
            id="pd-rev-pic"
          />
          <img
            src="https://images.unsplash.com/photo-1495613455702-836d1327ebc6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1480&q=80"
            alt="Reviewer "
            id="pd-rev-pic"
          />
        </div>
      </div>
      <button onClick={() => onReviewDelete(profileReview._id)}>Delete</button>
    </div>
  );
};

export default ProfileReview;