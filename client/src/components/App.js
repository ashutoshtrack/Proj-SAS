import React, { Component } from "react";
import { Animated } from "react-animated-css";
import { Navbar, NavItem, Nav, NavDropdown, MenuItem } from "react-bootstrap";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";
//import Header from "./Header";
import Yamma from "./Yamma";
import RegForm from "./RegForm";
import Landing from "./Landing";
import Student from "./Student";
import "../index.css";

//const Header = () => <h2>Header</h2>;
//const Dashboard = () => <h2>DasShboard</h2>;
//const SurveyNew = () => <h2>SurveyNew</h2>;
//const Landing = () => <h2>Landing</h2>;

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Yamma />
            <Route exact path="/" component={Landing} />
            <Route path="/student" component={Student} />
            <Route path="/new" component={RegForm} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);
