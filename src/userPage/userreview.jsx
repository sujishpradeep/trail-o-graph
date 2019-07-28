import React from "react";
import { Link } from "react-router-dom";

const UserReview = ({ userReview, onReviewDelete }) => {
  return (
    <div className="ud-outer-container">
      <div className="ud-review-container  ">
        <div className="ud-review-header  ">
          <Link
            to={`/trail/${userReview.trail_id}`}
            style={{ textDecoration: "none" }}
          >
            <img
              src="https://images.unsplash.com/photo-1495613455702-836d1327ebc6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1480&q=80"
              alt="Trail "
              id="ud-trail-pic"
            />
          </Link>
          <div className="ud-trail-name">
            <Link
              to={`/trail/${userReview.trail_id}`}
              style={{ textDecoration: "none" }}
            >
              <h2 id="profile-name">{userReview.trail_name}</h2>
            </Link>
            <p>{userReview.trail_state}</p>
          </div>
          <div id="ud-trail-height">
            <h2> {userReview.trail_height} feet</h2>
          </div>
        </div>
        <div className="ud-review-content  ">
          <p>{userReview.content}</p>

          <p>
            Amazing place to visit with family. The place is kids friendly,
            although one cannot take pets along. The mistic sunrise just
            enchants the eye and makes it worth the trek.
          </p>
        </div>
        <div id="ud-review-photos">
          <img
            src="https://images.unsplash.com/photo-1495613455702-836d1327ebc6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1480&q=80"
            alt="Reviewer "
            id="ud-rev-pic"
          />
          <img
            src="https://images.unsplash.com/photo-1495613455702-836d1327ebc6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1480&q=80"
            alt="Reviewer "
            id="ud-rev-pic"
          />
          <img
            src="https://images.unsplash.com/photo-1495613455702-836d1327ebc6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1480&q=80"
            alt="Reviewer "
            id="ud-rev-pic"
          />
        </div>
      </div>
      <button onClick={() => onReviewDelete(userReview._id)}>Delete</button>
    </div>
  );
};

export default UserReview;
