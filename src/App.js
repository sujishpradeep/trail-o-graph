import React from "react";
import MainPage from "./components/mainpage";
import TrailPage from "./components/trailpage";

import NavBar from "./components/navbar";
import { Route, BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <NavBar />
      <Route path="/" exact component={MainPage} />
      <Route path="/trail/:id" component={TrailPage} />
    </Router>
  );
}

export default App;
