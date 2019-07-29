import React from "react";
import { Link } from "react-router-dom";

const TrailReview = ({ reviewInfo }) => {
  return (
    <div className="td-review-container  ">
      <div className="td-review-header  ">
        <Link
          to={`/profile/${reviewInfo.user_id}`}
          style={{ textDecoration: "none" }}
        >
          <div className="td-profile-pic ">
            <img
              src="https://images.unsplash.com/photo-1495613455702-836d1327ebc6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1480&q=80"
              alt="Reviewer "
              id="td-rev-profile-pic"
            />
          </div>
        </Link>

        <div className="td-profile-name">
          <Link
            to={`/profile/${reviewInfo.user_id}`}
            style={{ textDecoration: "none" }}
          >
            <h2 id="profile-name">{reviewInfo.user_name}</h2>
          </Link>
        </div>
      </div>
      <div className="td-review-content  ">
        <p>{reviewInfo.content}</p>

        <p>
          Amazing place to visit with family. The place is kids friendly,
          although one cannot take pets along. The mistic sunrise just enchants
          the eye and makes it worth the trek.
        </p>
      </div>
      <div className="td-review-photos">
        <img
          src="https://images.unsplash.com/photo-1495613455702-836d1327ebc6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1480&q=80"
          alt="Reviewer "
          id="td-rev-pic"
        />
        <img
          src="https://images.unsplash.com/photo-1495613455702-836d1327ebc6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1480&q=80"
          alt="Reviewer "
          id="td-rev-pic"
        />
        <img
          src="https://images.unsplash.com/photo-1495613455702-836d1327ebc6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1480&q=80"
          alt="Reviewer "
          id="td-rev-pic"
        />
      </div>
    </div>
  );
};

export default TrailReview;
