import React, { Component } from "react";
import { connect } from "react-redux";
import { Animated } from "react-animated-css";
import axios from "axios";
var FontAwesome = require("react-fontawesome");

//import { Navbar, NavItem, Nav, NavDropdown, MenuItem } from "react-bootstrap";

class ViewProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userprofs: null
    };
  }

  componentWillMount() {
    console.log("pather" + window.location.pathname);
    axios
      .get("/api" + window.location.pathname)
      .then(response => this.setState({ userprofs: response.data }));
  }

  render() {
    if (!this.props.auth === null || !this.props.auth === false) {
      console.log("thisprpsviewprofie", this.props.auth.image);

      if (!this.state.userprofs === null || !this.state.userprofs === false) {
        return (
          <div>
            <div className="row" class="profHead">
              <div class="compImg">
                <img
                  src={this.props.auth.image + 50}
                  alt="profpic"
                  class="jprfIMG"
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
                  <p class="mid">
                    <span class="bld">{this.props.auth.userName}</span>
                    <br />
                    <span class="name">
                      &nbsp;Desi {this.state.userprofs.name}
                    </span>
                    <br />
                    <span class="disp">&nbsp;Location: Mumbai</span>
                  </p>

                  <button class="edP">
                    <span>Edit </span>
                  </button>
                </div>
              </Animated>
              <Animated
                animationIn="faceInUp"
                animationOut="fadeOut"
                isVisible={true}
              >
                <div className="row" class="compDisp">
                  <span class="title">Education Details</span>
                  <br />
                  <br />
                  <span class="title2">&nbsp; &nbsp;Degree Collage</span>
                  <br />
                  <span class="disp">
                    &nbsp; &nbsp;Vidyalankar School of Information Technology
                    <br />
                    &nbsp; &nbsp;2015-Present
                  </span>
                  <hr />
                  <span class="title2">&nbsp; &nbsp;jr. Collage</span>
                  <br />
                  <span class="disp">
                    &nbsp; &nbsp;Bhavans H.S. Collage
                    <br />
                    &nbsp; &nbsp;2013-2015
                  </span>
                  <hr />
                  <span class="title2">&nbsp; &nbsp;School</span>
                  <br />
                  <span class="disp">
                    &nbsp; &nbsp;Robert Money Technical High School
                    <br />
                    &nbsp; &nbsp;2003-2013
                  </span>
                </div>
              </Animated>

              <Animated
                animationIn="faceInUp"
                animationOut="fadeOut"
                isVisible={true}
              >
                <div className="row" class="compDisp">
                  <span class="title">Experience</span>
                  <br />
                  <br />
                  <span class="title">&nbsp; &nbsp; Web Head</span>
                  <button class="del">
                    <FontAwesome name="minus-square" class="delb" />
                  </button>
                  <br />
                  <span class="title2">&nbsp; &nbsp; E-Cell VSIT</span>
                  <br />
                  <span class="disp">
                    &nbsp; &nbsp; Dec 2017 - Present
                    <br />
                    &nbsp; &nbsp; Mumbai
                    <br />
                    <br />
                    <p class="pad">
                      The standard chunk of Lorem Ipsum used since the 1500s is
                      reproduced below for those interested. Sections 1.10.32
                      and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero
                      are also reproduced in their exact original form,
                      accompanied by English versions from the 1914 translation
                      by H. Rackham.
                    </p>
                  </span>
                  <hr />
                </div>
              </Animated>

              <Animated
                animationIn="faceInUp"
                animationOut="fadeOut"
                isVisible={true}
              >
                <div className="row" class="compDisp">
                  <span class="title">Project</span>
                  <br />
                  <br />
                  <span class="title2">&nbsp; &nbsp; Project 1</span>
                  <button class="del">
                    <FontAwesome name="minus-square" class="delb" />
                  </button>
                  <br />
                  <span class="title">
                    &nbsp; &nbsp; Self or Organigation name this project belong
                    to
                  </span>
                  <br />
                  <span class="disp">
                    &nbsp; &nbsp; Dec 2017 - Present
                    <br />
                    <br />
                    <p class="pad">
                      The standard chunk of Lorem Ipsum used since the 1500s is
                      reproduced below for those interested. Sections 1.10.32
                      and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero
                      are also reproduced in their exact original form,
                      accompanied by English versions from the 1914 translation
                      by H. Rackham.<a href="" class="vProj">
                        View Project
                      </a>
                    </p>
                  </span>
                  <hr />
                </div>
              </Animated>

              <Animated
                animationIn="faceInUp"
                animationOut="fadeOut"
                isVisible={true}
              >
                <div className="row" class="compDisp">
                  <span class="title">Skill</span>
                  <br />
                  <br />
                  <div class="inline">
                    <span class="skill">
                      Web Head
                      <button class="min">X</button>
                    </span>
                  </div>

                  <div class="inline">
                    <span class="skill">
                      Web Head
                      <button class="min">X</button>
                    </span>
                  </div>

                  <div class="inline">
                    <span class="skill">
                      Web Head
                      <button class="min">X</button>
                    </span>
                  </div>

                  <div class="inline">
                    <span class="skill">
                      Web Head
                      <button class="min">X</button>
                    </span>
                  </div>

                  <div class="inline">
                    <span class="skill">
                      Web Head
                      <button class="min">X</button>
                    </span>
                  </div>

                  <div class="inline">
                    <span class="skill">
                      Web Head
                      <button class="min">X</button>
                    </span>
                  </div>

                  <div class="inline">
                    <span class="skill">
                      Web Head
                      <button class="min">X</button>
                    </span>
                  </div>

                  <div class="inline">
                    <span class="skill">
                      Web Head
                      <button class="min">X</button>
                    </span>
                  </div>

                  <div class="inline">
                    <span class="skill">
                      Web Head
                      <button class="min">X</button>
                    </span>
                  </div>

                  <div class="inline">
                    <span class="skill">
                      Web Head
                      <button class="min">X</button>
                    </span>
                  </div>
                </div>
              </Animated>

              <Animated
                animationIn="faceInUp"
                animationOut="fadeOut"
                isVisible={true}
              >
                <div className="row" class="compDisp">
                  <span class="title">Certification</span>
                  <br />
                  <br />
                  <span class="title2">&nbsp; &nbsp;Certificate 1</span>
                  <button class="del">
                    <FontAwesome name="minus-square" class="delb" />
                  </button>
                  <br />
                  <span class="title">
                    &nbsp; &nbsp;Organigation certificate belong to
                  </span>
                  <br />
                  <span class="disp">
                    &nbsp; &nbsp;Duration: Dec 2017 - Feb-2018
                    <a href="#" class="vProj">
                      View Certificate
                    </a>
                  </span>

                  <br />
                  <hr />
                </div>
              </Animated>

              <Animated
                animationIn="fadeInUp"
                animationOut="fadeOut"
                isVisible={true}
              >
                <div className="row" class="compDisp">
                  <p>
                    <br />
                    <span class="title2">Presonal Details</span>
                    <br />
                    <br />
                    <span class="disp">
                      &nbsp;&nbsp;Email: amanmahato888@gmail.com
                      <br />
                      &nbsp;&nbsp;Ph. No: 9920545896
                      <br />
                      &nbsp;&nbsp;Birthdate: 19-Sep-1996
                      <br />
                      &nbsp;&nbsp;Gender: Male
                      <br />
                      &nbsp;&nbsp;languages: Hindi, English, Marathi
                    </span>
                    <br />
                  </p>
                </div>
              </Animated>
              <br />
            </div>
          </div>
          //end of main div
        );
      }
    }
    return <div>Processing</div>;
  }
}

function mapStateToProps(state) {
  return { auth: state.auth };
}

export default connect(mapStateToProps, null)(ViewProfile);
