import React from "react";

const Banner = () => {
  return (
    <div className="bannerOuter">
      <section id="banner">
        <header className="brand-banner small-screen-desktop ">
          <h1 className="brand-banner__header">
            <div>True hiker stories</div>
          </h1>
          <b className="brand-banner__subheader">
            Discovering the mountains of India
          </b>
          <div className="explore-container">
            <button className="btn-exp">Sign up</button>
          </div>
        </header>
      </section>
      <div className="brand-png " />
    </div>
  );
};

export default Banner;
