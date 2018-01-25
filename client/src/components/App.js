import React, { Component } from "react";
//import { Animated } from "react-animated-css";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";
import Header from "./Header";
//import Yamma from "./Yamma";
import RegForm from "./RegForm";
import RegForme from "./RegForme";

import Landing from "./Landing";
import Student from "./Student";
import "../index.css";

//const Header = () => <h2>Header</h2>;
//const Dashboard = () => <h2>DasShboard</h2>;
//const SurveyNew = () => <h2>SurveyNew</h2>;
//const Landing = () => <h2>Landing</h2>;
var loggedin = false;

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    if (!this.props.auth === false || !this.props.auth === null) {
      loggedin = true;
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
              render={() => (loggedin ? <RegForme /> : <Landing />)}
              //  component={RegForm}
            />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return { auth: state.auth };
}
export default connect(mapStateToProps, actions)(App);
