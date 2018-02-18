import React, { Component } from "react";
import { Animated } from "react-animated-css";
//import { Navbar, NavItem, Nav, NavDropdown, MenuItem } from "react-bootstrap";

class Landing extends Component {
  render() {
    return (
      <Animated
        animationIn="bounceInUp"
        animationOut="fadeOut"
        isVisible={true}
      >
        <div className="row" id="abc">
          <Animated
            animationIn="zoomInRight"
            animationOut="fadeOut"
            isVisible={true}
          >
            <div className="head_title text-center">
              <h1 style={{ color: "gold" }}>Select Your Role!</h1>
              <div className="separator">
                <div className="boxs" />
              </div>
            </div>
          </Animated>

          <div className="col-md-4 col-sm-4">
            <div className="eventimg">
              <h2>Students</h2>
              <br />
              <p>
                "Random Text for dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                aute irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum."
              </p>
              <br />
              <a href="/student" className="btn">
                Register Here!
              </a>
            </div>
          </div>

          <div className="col-md-4 col-sm-4">
            <div className="eventimg center">
              <h2>Startups</h2>
              <br />
              <p>
                "Random Text for dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                aute irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum."
              </p>
              <br />
              <a href="www.google.com" className="btn">
                Register Here!
              </a>
            </div>
          </div>

          <div className="col-md-4 col-sm-4">
            <div className="eventimg center">
              <h2>Angels</h2>
              <br />
              <p>
                "Random Text for dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                aute irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum."
              </p>
              <br />
              <a href="www.google.com" className="btn">
                Register Here!
              </a>
            </div>
          </div>
        </div>
      </Animated>
      //end of main div
    );
  }
}

export default Landing;
