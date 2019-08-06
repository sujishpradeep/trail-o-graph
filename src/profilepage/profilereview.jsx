import React from "react";
import { Link } from "react-router-dom";

const ProfileReview = ({ profileReview, onReviewDelete, showedit }) => {
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
              <h2 id="profile-name">{profileReview.name}</h2>
            </Link>
            <p>{profileReview.trail_state}</p>
          </div>
          {showedit && (
            <button
              type="button"
              className="btn btn-danger btn-xs"
              style={{
                height: "30px",
                backgroundColor: "#d0021b",
                color: "white",
                cursor: "pointer",
                fontSize: "14px"
              }}
              onClick={() => onReviewDelete(profileReview._id)}
            >
              Delete
            </button>
          )}
        </div>
        <div className="pd-review-content  ">
          {profileReview.content.map((r, i) => (
            <p key={i}>{r}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfileReview;

/*
 <div id="pd-trail-height">
            <h2> {profileReview.trail_height} feet</h2>
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
        */
