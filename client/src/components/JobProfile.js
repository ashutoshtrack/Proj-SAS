import React, { Component } from "react";
import { Animated } from "react-animated-css";
//import { Navbar, NavItem, Nav, NavDropdown, MenuItem } from "react-bootstrap";

class JobProfile extends Component {
  render() {
    return (
      <div>
        <div className="row" class="compHead">
          <div class="compImg">
            <img
              src="http://www.stickpng.com/assets/images/580b57fcd9996e24bc43c521.png"
              class="prfIMG"
            />
          </div>
        </div>

        <div className="row" class="compBody">
          <Animated
            animationIn="fadeInUp"
            animationOut="fadeOut"
            isVisible={true}
          >
            <div className="row" class="compDisp">
              <p>
                <span class="title">About this job</span>
                <br />
                <br />
                <span class="bld">&nbsp;Front End Web Developer</span>
                <br />
                <span class="name">&nbsp;Company Name</span>
                <br />
                <span class="disp">&nbsp;Location: Mumbai, Hyderabad</span>
              </p>
            </div>
          </Animated>
          <Animated
            animationIn="faceInUp"
            animationOut="fadeOut"
            isVisible={true}
          >
            <div className="row" class="compDisp">
              <p>
                <span class="title2">Description</span>
                <br />
                <br />
                <span class="disp">
                  &nbsp; &nbsp; &nbsp;Lorem Ipsum is simply dummy text of the
                  printing and typesetting industry. Lorem Ipsum has been the
                  industrys standard dummy text ever since the 1500s, when an
                  unknown printer took a galley of type and scrambled it to make
                  a type specimen book. It has survived not only five centuries,
                  but also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                  <br />
                  <br />
                  &nbsp; &nbsp; &nbsp;Lorem Ipsum is simply dummy text of the
                  printing and typesetting industry. Lorem Ipsum has been the
                  industrys standard dummy text ever since the 1500s, when an
                  unknown printer took a galley of type and scrambled it to make
                  a type specimen book. It has survived not only five centuries,
                  but also the leap into electronic typesetting. It has survived
                  not only five centuries, but also the leap into electronic
                  typesetting.
                  <br />
                  <br />
                  &nbsp; &nbsp; &nbsp;Lorem Ipsum is simply dummy text of the
                  printing and typesetting industry. Lorem Ipsum has been the
                  industrys standard dummy text ever since the 1500s, when an
                  unknown printer took a galley of type and scrambled.
                </span>
                <br />
                <br />
                <br />
                <span class="title2">
                  What you will be doing at XYZ Company:
                </span>
                <br />
                <br />
                <span class="disp">
                  <ul>
                    <li>1st Requirement</li>
                    <li>1st Requirement</li>
                    <li>1st Requirement</li>
                    <li>1st Requirement</li>
                    <li>1st Requirement</li>
                    <li>1st Requirement</li>
                    <li>1st Requirement</li>
                    <li>1st Requirement</li>
                    <li>1st Requirement</li>
                    <li>1st Requirement</li>
                  </ul>
                </span>
                <br />
                <br />
                <span class="title2">What we require of you:</span>
                <br />
                <br />
                <span class="disp">
                  <ul>
                    <li>1st Requirement</li>
                    <li>1st Requirement</li>
                    <li>1st Requirement</li>
                    <li>1st Requirement</li>
                    <li>1st Requirement</li>
                    <li>1st Requirement</li>
                    <li>1st Requirement</li>
                    <li>1st Requirement</li>
                    <li>1st Requirement</li>
                    <li>1st Requirement</li>
                  </ul>
                </span>
              </p>
            </div>
          </Animated>
          <Animated
            animationIn="fadeInUp"
            animationOut="fadeOut"
            isVisible={true}
          >
            <div className="row" class="compDisp">
              <span class="title">Job Details</span>
              <br />
              <br />
              <span class="title2">&nbsp; &nbsp;Employment</span>
              <br />
              <span class="disp">&nbsp; &nbsp;Full-Time</span>
              <hr />
              <span class="title2">&nbsp; &nbsp;Job Function</span>
              <br />
              <span class="disp">
                &nbsp; &nbsp;Engineering, Information Technology, Design
              </span>
              <hr />
              <span class="title2">&nbsp; &nbsp;Job Industry</span>
              <br />
              <span class="disp">
                &nbsp; &nbsp;Computer Software, Information Technology and
                Service
              </span>
              <hr />
            </div>
          </Animated>
          <br />
        </div>
      </div>
      //end of main div
    );
  }
}

export default JobProfile;
