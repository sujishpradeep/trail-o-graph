import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div id="navbar">
      <div id="nav-trailo">
        <Link to="/">trailo</Link>
      </div>
      <div id="nav-user">
        <div id="nav-login">
          <Link to="/login">Login</Link>
        </div>
        <div id="nav-signup">
          <Link to="/signup">Signup</Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
