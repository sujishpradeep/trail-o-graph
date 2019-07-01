import React from "react";
import NavBar from "./components/navbar";
import TrailFeed from "./components/trailfeed";
import Banner from "./components/banner";

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <Banner />
      <TrailFeed />
    </React.Fragment>
  );
}

export default App;
