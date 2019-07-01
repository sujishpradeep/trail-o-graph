import React, { Component } from "react";

import "bootstrap/dist/css/bootstrap.css";

class NavBar extends Component {
  state = {};
  render() {
    return (
      <div id="all">
        <ul id="navbarul">
          <li id="navbarli" />
          <li id="navbarli">
            <a href="#top">TRAIL'OGRAPH</a>
          </li>
          <li id="navbarli" />
          <li id="navbarli" />
        </ul>
      </div>
    );
  }
}

export default NavBar;
