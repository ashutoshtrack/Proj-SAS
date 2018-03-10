import React, { Component } from "react";
//import { Animated } from "react-animated-css";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";
import Header from "./Header";
//import Yamma from "./Yamma";
//import RegForm from "./RegForm";
import RegFormey from "./RegFormey";

import JobProfile from "./JobProfile";
import ViewProfile from "./ViewProfile";
import Landing from "./Landing";
import Student from "./Student";
import "../index.css";
import Dashboard from "./Dashboard";
import SavedJobsArena from "./SavedJobsArena";

//const Header = () => <h2>Header</h2>;

var loggedin = false;
var registered = false;

var counter = 1;
class App extends Component {
  com;

  componentDidMount() {
    this.props.fetchUser();
    console.log("this is movieng");
  }

  creamiepie() {
    if (!this.props.respo === false || !this.props.respo === null) {
      console.log(this.props.respo, "this.props.repo");

      if (
        !this.props.respo.orgName === null ||
        !this.props.respo.orgName === false
      ) {
        registered = true;
        return true;
      }
    }

    return (registered = false);
  }

  render() {
    if (!this.props.auth === false || !this.props.auth === null) {
      loggedin = true;
      if (counter === 1) {
        this.props.fetchRegDetails(this.props.auth._id);

        counter++;
      }
    }

    this.creamiepie();

    console.log(loggedin, registered);
    return (
      <div>
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path="/" component={Landing} />
            <Route exact path="/student" component={Student} />
            <Route exact path="/jobdesc/:albumid" component={JobProfile} />
            <Route exact path="/viewProfile" component={ViewProfile} />
            <Route
              exact
              path="/dashboard"
              render={() => (registered ? <Dashboard /> : <RegFormey />)}
            />
            <Route
              exact
              path="/new"
              component={() => {
                if (!loggedin === false) {
                  return registered ? <Dashboard /> : <RegFormey />;
                } else {
                  return <Landing />;
                }
              }}
            />
            <Route exact path="/savedJobs" component={SavedJobsArena} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    auth: state.auth,
    respo: state.respo.respo
  };
}
export default connect(mapStateToProps, actions)(App);
