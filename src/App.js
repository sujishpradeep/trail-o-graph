import React, { Component } from "react";
import MainPage from "./components/mainpage";
import TrailPage from "./trailpage/trailpage";
import Footer from "./components/footer";
import NavBar from "./components/navbar";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Login from "./auth/login";
import Logout from "./auth/logout";
import Signup from "./auth/signup";
import ProfilePage from "./profilepage/profilepage";
import auth from "./services/authservice";

class App extends Component {
  state = {};

  componentDidMount() {
    const user = auth.getCurrentUser();
    this.setState({ user });
  }
  render() {
    const { user } = this.state;
    return (
      <Router>
        <body-container>
          <body-container-2>
            <NavBar user={user} />
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
}

export default App;
