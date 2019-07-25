import React from "react";
import MainPage from "./components/mainpage";
import TrailPage from "./trailpage/trailpage";
import Footer from "./components/footer";
import NavBar from "./components/navbar";
import { Route, BrowserRouter as Router } from "react-router-dom";
import UserPage from "./userPage/userpage";
function App() {
  return (
    <Router>
      <body-container>
        <body-container-2>
          <NavBar />
          <Route path="/" exact component={MainPage} />
          <Route path="/trail/:id" component={TrailPage} />
          <Route path="/user/:id" component={UserPage} />
        </body-container-2>
        <Footer />
      </body-container>
    </Router>
  );
}

export default App;
