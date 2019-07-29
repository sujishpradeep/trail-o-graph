import React from "react";
import MainPage from "./components/mainpage";
import TrailPage from "./trailpage/trailpage";
import Footer from "./components/footer";
import NavBar from "./components/navbar";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Login from "./auth/login";
import Logout from "./auth/logout";
import Signup from "./auth/signup";
import ProfilePage from "./profilepage/profilepage";

function App() {
  return (
    <Router>
      <body-container>
        <body-container-2>
          <NavBar />
          <Route path="/login" component={Login} />
          <Route path="/logout" component={Logout} />
          <Route path="/signup" component={Signup} />
          <Route path="/trail/:id" component={TrailPage} />
          <Route path="/profile/:id" component={ProfilePage} />
          <Route path="/" exact component={MainPage} />
        </body-container-2>
        <Footer />
      </body-container>
    </Router>
  );
}

export default App;
