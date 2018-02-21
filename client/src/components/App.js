import React, { Component } from "react";
//import { Animated } from "react-animated-css";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";
import Header from "./Header";
//import Yamma from "./Yamma";
//import RegForm from "./RegForm";
import RegFormey from "./RegFormey";

import Landing from "./Landing";
import Student from "./Student";
import "../index.css";
import Dashboard from "./Dashboard";

//const Header = () => <h2>Header</h2>;
//const Dashboard = () => <h2>DasShboard</h2>;
//const SurveyNew = () => <h2>SurveyNew</h2>;
//const Landing = () => <h2>Landing</h2>;
var loggedin = false;
var registered = false;
var counter = 1;
class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
    console.log("this is movieng");
  }

  render() {
    if (!this.props.auth === false || !this.props.auth === null) {
      loggedin = true;
      if (counter == 1) {
        this.props.fetchRegDetails(this.props.auth._id);
        counter++;
      }
    }
    if (!this.props.auth === false || !this.props.auth === null) {
      console.log("this is true");
      // if (!this.props.auth._id === null) {
      console.log("this is true");

      // }
    }
    if (!this.props.respo === false || !this.props.respo === null) {
      console.log(this.props.respo, "this.props.repo");
      registered = false;
      if (!this.props.respo.orgName === null) {
        registered = true;
      }
    }

    console.log(loggedin);
    return (
      <div>
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path="/" component={Landing} />
            <Route exact path="/student" component={Student} />
            <Route
              exact
              path="/new"
              render={() => {
                if (loggedin && registered) {
                  return <Dashboard />;
                } else if (loggedin) {
                  return <RegFormey />;
                } else {
                  return <Landing />;
                }
              }}
              //  render={() => (loggedin ? <RegFormey /> : <Landing />)}
              //  component={RegForm}
            />
            <Route
              exact
              path="/dashboard"
              render={() => (registered ? <Dashboard /> : <RegFormey />)}
            />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    auth: state.auth,
    respo: state.respo
  };
}
export default connect(mapStateToProps, actions)(App);
