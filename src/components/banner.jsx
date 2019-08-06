import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="bannerOuter">
      <section id="banner">
        <header className="brand-banner small-screen-desktop ">
          <h1 className="brand-banner__header">
            <div>True hiker stories</div>
          </h1>
          <b className="brand-banner__subheader">
            Discovering the mountains of the world
          </b>
          <div className="explore-container">
            <button className="btn-exp">
              <Link
                to="/signup"
                style={{ textDecoration: "none", color: "white" }}
              >
                Signup
              </Link>
            </button>
          </div>
        </header>
      </section>
      <div className="brand-png " />
    </div>
  );
};

export default Banner;
