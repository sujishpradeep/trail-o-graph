import React from "react";
import { Link } from "react-router-dom";

const NavBar = ({ user }) => {
  console.log("user 2", user);
  return (
    <div id="navbar">
      <div id="nav-trailo">
        <Link to="/">trailo</Link>
      </div>
      {!user && (
        <div id="nav-user">
          <div id="nav-login">
            <Link to="/login">Login</Link>
          </div>
          <div id="nav-signup">
            <Link to="/signup">Signup</Link>
          </div>
        </div>
      )}
      {user && (
        <div id="nav-user">
          <div id="nav-login">
            <Link to="/">{user.fullname}</Link>
          </div>
          <div id="nav-signup">
            <Link to="/logout">Logout</Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;
