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
import ProfileUpdate from "./profilepage/profieupdate";
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
        <body-container className="wrapper">
          <body-container-2 className="page-body">
            <NavBar user={user} />
            <Route path="/login" component={Login} />
            <Route path="/logout" component={Logout} />
            <Route path="/signup" component={Signup} />
            <Route
              path="/trail/:id"
              render={props => <TrailPage {...props} user={user} />}
            />
            <Route path="/profile/:id" component={ProfilePage} />
            <Route
              path="/update/:id"
              render={props => <ProfileUpdate {...props} user={user} />}
            />
            <Route
              path="/"
              exact
              render={props => <MainPage {...props} user={user} />}
            />
          </body-container-2>
          <Footer />
        </body-container>
      </Router>
    );
  }
}

export default App;
