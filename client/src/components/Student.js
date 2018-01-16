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
            <div class="col-md-4 col-sm-4" />
            <div class="col-md-4 col-sm-4">
              <div class="eventimg">
                <h2>Students Login</h2>
                <br />

                <br />
                <a href="/auth/google">
                  <img src={logoG} class="login" />
                </a>
                <br />
                <br />
                <br />
                <a href="/auth/linkedin">
                  <img src={logoL} class="login" />
                </a>
              </div>
            </div>
            <div class="col-md-4 col-sm-4" />
          </div>
        </Animated>
      </div>
    );
  }
}

export default Student;
