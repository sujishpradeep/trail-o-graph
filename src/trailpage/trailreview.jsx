import React from "react";
import { Link } from "react-router-dom";
import { apiUrl } from "../config.json";

const TrailReview = ({ reviewInfo }) => {
  console.log(reviewInfo);
  const profilePicPath = apiUrl + "/" + reviewInfo.profile.profilePicPath;

  return (
    <div className="td-review-container  ">
      <div className="td-review-header  ">
        <Link
          to={`/profile/${reviewInfo.profile._id}`}
          style={{ textDecoration: "none" }}
        >
          <div className="td-profile-pic ">
            <img src={profilePicPath} alt="Reviewer " id="td-rev-profile-pic" />
          </div>
        </Link>

        <div className="td-profile-name">
          <Link
            to={`/profile/${reviewInfo.profile._id}`}
            style={{ textDecoration: "none" }}
          >
            <h2 id="profile-name">{reviewInfo.profile.name}</h2>
          </Link>
        </div>
      </div>
      <div className="td-review-content  ">
        {reviewInfo.content.map((r, i) => (
          <p key={i}>{r}</p>
        ))}
      </div>
    </div>
  );
};

export default TrailReview;

/*
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
</div>*/
