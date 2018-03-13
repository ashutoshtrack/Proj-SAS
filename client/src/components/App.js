import React, { Component } from "react";
//import { Animated } from "react-animated-css";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";
import Header from "./Header";
//import Yamma from "./Yamma";
//import RegForm from "./RegForm";
import RegFormey from "./RegFormey";
import ContactForm from "./ContactForm";
import JobProfile from "./JobProfile";
import ViewProfile from "./ViewProfile";
import Landing from "./Landing";
import Student from "./Student";
import "../index.css";
import Dashboard from "./Dashboard";
import SavedJobsArena from "./SavedJobsArena";

//const Header = () => <h2>Header</h2>;
const Dummy = () => <h2>Dummy</h2>;
var loggedin = false;
var registered = false;
var student = false;
var counter = 1;
class App extends Component {
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

        if (this.props.respo.role === "student") {
          student = true;
        }
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
            <Route exact path="/viewprofile/:usere" component={ViewProfile} />
            <Route exacth path="/editprofile" component={ContactForm} />
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
                  if (!registered === false) {
                    console.log("mashalla mahallsa ", student);
                    if (student) {
                      return <Dummy />;
                    }
                    return <Dashboard />;
                  } else {
                    console.log("mashalla mahallsa2 ", student);
                    return <RegFormey />;
                  }
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
