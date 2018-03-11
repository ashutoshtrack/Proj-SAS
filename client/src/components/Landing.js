import React, { Component } from "react";
import { Animated } from "react-animated-css";
import { Carousel } from "react-bootstrap";
//import { Navbar, NavItem, Nav, NavDropdown, MenuItem } from "react-bootstrap";

class Landing extends Component {
  render() {
    return (
      <div>
        <Animated
          animationIn="bounceInUp"
          animationOut="fadeOut"
          isVisible={true}
        >
          <div className="row hid">
            <Carousel>
              <Carousel.Item>
                <img
                  width={900}
                  height={500}
                  alt="900x500"
                  src="https://react-bootstrap.github.io/carousel.png"
                />
                <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>
                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  width={900}
                  height={500}
                  alt="900x500"
                  src="https://react-bootstrap.github.io/carousel.png"
                />
                <Carousel.Caption>
                  <h3>Second slide label</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  width={900}
                  height={500}
                  alt="900x500"
                  src="https://react-bootstrap.github.io/carousel.png"
                />
                <Carousel.Caption>
                  <h3>Third slide label</h3>
                  <p>
                    Praesent commodo cursus magna, vel scelerisque nisl
                    consectetur.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>

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
                  aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat non proident, sunt in culpa qui officia
                  deserunt mollit anim id est laborum."
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
                  aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat non proident, sunt in culpa qui officia
                  deserunt mollit anim id est laborum."
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
                  aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat non proident, sunt in culpa qui officia
                  deserunt mollit anim id est laborum."
                </p>
                <br />
                <a href="www.google.com" className="btn">
                  Register Here!
                </a>
              </div>
            </div>
          </div>
        </Animated>
      </div>
      //end of main div
    );
  }
}

export default Landing;
