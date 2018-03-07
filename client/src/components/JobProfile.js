import React, { Component } from "react";
import { Animated } from "react-animated-css";
import axios from "axios";

//import { Navbar, NavItem, Nav, NavDropdown, MenuItem } from "react-bootstrap";

class JobProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jobs: null
    };
  }

  componentWillMount() {
    console.log("this is the bommb", window.location);
    axios
      .get("/api" + window.location.pathname)
      .then(response => this.setState({ jobs: response.data }));
  }

  workrolefetcher() {
    let contentboy = [];

    this.state.jobs[0].workrole.forEach(worky => {
      contentboy.push(<li>{worky}</li>);
    });
    return <ul>{contentboy}</ul>;
  }
  qualificationfetcher() {
    let contentboy = [];

    this.state.jobs[0].qualification.forEach(worky => {
      contentboy.push(<li>{worky}</li>);
    });
    return <ul>{contentboy}</ul>;
  }
  render() {
    console.log(this.state.jobs);
    if (!this.state.jobs === null || !this.state.jobs === false) {
      console.log("jobbyprofiler", this.state.jobs[0].title);

      return (
        <div>
          <div className="row" class="compHead">
            <div class="compImg">
              <img src={this.state.jobs[0].image} class="jprfIMG" />
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
                  <span class="bld">&nbsp;{this.state.jobs[0].title}</span>
                  <br />
                  <span class="name">&nbsp;Company Name</span>
                  <br />
                  <span class="disp">
                    &nbsp;Location: {this.state.jobs[0].location}
                  </span>
                </p>

                <button class="save" onClick={()=>{alert("bhai mast na!")}}>
                  <span>SAVE </span>
                </button>
                <button class="apply">APPLY</button>
              </div>
            </Animated>
            <Animated
              animationIn="faceInUp"
              animationOut="fadeOut"
              isVisible={true}
            >
              <div className="row" class="compDisp">
                <p>
                  <br />
                  <span class="title2">About Us</span>
                  <br />
                  <br />
                  <span class="disp">
                    &nbsp; &nbsp; &nbsp;{this.state.jobs[0].description}
                  </span>
                  <br />
                  <br />
                  <br />
                  <span class="title2">
                    What you will be doing at {this.state.jobs[0].title}:
                  </span>
                  <br />
                  <br />
                  <span class="disp">{this.workrolefetcher()}</span>
                  <br />
                  <br />
                  <span class="title2">What we require of you:</span>
                  <br />
                  <br />
                  <span class="disp">{this.qualificationfetcher()}</span>
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
                  &nbsp; &nbsp;{this.state.jobs[0].jobfunct}
                </span>
                <hr />
                <span class="title2">&nbsp; &nbsp;Job Industry</span>
                <br />
                <span class="disp">
                  &nbsp; &nbsp;{this.state.jobs[0].jobindustry}
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
    return (
      <div>
        <h3>processing</h3>
      </div>
    );
  }
}

export default JobProfile;
