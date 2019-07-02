import React from "react";
import NavBar from "./components/navbar";
import TrailFeed from "./components/trailfeed";
import Banner from "./components/banner";
import Filters from "./components/filters";

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <Banner />
      <Filters />
      <TrailFeed />
    </React.Fragment>
  );
}

export default App;
