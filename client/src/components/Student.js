import React, { Component } from "react";
import { Animated } from "react-animated-css";
//import { Navbar, NavItem, Nav, NavDropdown, MenuItem } from "react-bootstrap";
import logoG from "../google.png";
import logoL from "../linkedin.png";

class Student extends Component {
  render() {
    return (
      <div>
        <Animated
          animationIn="bounceInUp"
          animationOut="fadeOut"
          isVisible={true}
        >
          <div className="row  std">
            <div className="col-md-4 col-sm-4" />
            <div className="col-md-4 col-sm-4">
              <div className="eventimg">
                <h2>Students Login</h2>
                <br />

                <br />
                <a href="/auth/google">
                  <img src={logoG} className="login" />
                </a>
                <br />
                <br />
                <br />
                <a href="/auth/linkedin">
                  <img src={logoL} className="login" />
                </a>
              </div>
            </div>
            <div className="col-md-4 col-sm-4" />
          </div>
        </Animated>
      </div>
    );
  }
}

export default Student;
