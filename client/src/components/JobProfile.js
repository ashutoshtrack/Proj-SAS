import React, { Component } from "react";
import {
  Modal,
  Button,
  Popover,
  OverlayTrigger,
  Tooltip
} from "react-bootstrap";
import { Animated } from "react-animated-css";
import axios from "axios";

//import { Navbar, NavItem, Nav, NavDropdown, MenuItem } from "react-bootstrap";
var counter = 0;
class JobProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jobs: null,
      show: false,

      saveText: "SAVE"
    };
  }

  componentWillMount() {
    console.log("this is the bommb", window.location);
    axios
      .get("/api" + window.location.pathname)
      .then(response => this.setState({ jobs: response.data }));
  }
  /* componentWillUpdate() {
    axios
      .get("/api/sjobs/" + this.state.jobs[0].id)
      .then(response => console.log("working mahaveer"));
  }
  */
  // work fetchers
  workrolefetcher() {
    let contentboy = [];

    this.state.jobs[0].workrole.forEach(worky => {
      contentboy.push(<li>{worky}</li>);
    });

    return <ul>{contentboy}</ul>;
  }
  //quaalifications fetcher
  qualficationfetcher() {
    let contentboy = [];

    this.state.jobs[0].qualification.forEach(qually => {
      contentboy.push(<li>{qually}</li>);
    });

    return <ul>{contentboy}</ul>;
  }

  //modal workouts starts

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  // modal workouts end here

  //dochecker
  dochecker(ide) {
    axios.get("/api/sjobs/" + ide).then(response => {
      console.log("response data lenth", response.data.length);
      if (response.data.length === 0) {
        console.log("khali", response);
        this.setState({ saveText: "SAVE" });
      } else {
        console.log("bhara", response);
        this.setState({ saveText: "SAVED" });
      }
    });
  }

  render() {
    console.log(this.state.jobs);
    if (!this.state.jobs === null || !this.state.jobs === false) {
      console.log("jobbyprofiler", this.state.jobs[0].title);

      if (counter === 0) {
        this.dochecker(this.state.jobs[0]._id);
        counter++;
      }

      /*switch (this.state.checker) {
        case false:
          console.log("maya man ki dola");
          this.dochecker(this.state.jobs[0]._id);
          break;

        case true:
          console.log("punchanama kela");
          break;

        default:
          console.log("bhendi");
      }
      */
      /*
      if (this.state.checker) {
      } else {
        //  this.dochecker(this.state.jobs[0]._id);
        console.log("punchanama kela");
      }
*/
      /*
      if (this.state.jobs[0].savedJob === "true") {
        if (this.state.saveText === "SAVED") {
          console.log("Already setText Done!");
        } else {
          this.setState({ saveText: "SAVED" });
        }
      }
      */

      //modal workouts here
      const popover = (
        <Popover id="modal-popover" title="popover">
          very popover. such engagement
        </Popover>
      );
      const tooltip = <Tooltip id="modal-tooltip">wow.</Tooltip>;
      //modal workout end here

      return (
        <div>
          <div className="row" class="compHead">
            <div class="compImg">
              <img
                src={this.state.jobs[0].image}
                alt="companies"
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
                  <span class="bld">&nbsp;{this.state.jobs[0].title}</span>
                  <br />
                  <span class="name">&nbsp;Company Name</span>
                  <br />
                  <span class="disp">
                    &nbsp;Location: {this.state.jobs[0].location}
                  </span>
                </p>

                <button
                  class="save"
                  onClick={() => {
                    /*       axios
                      .put("/api/jobdesc/" + this.state.jobs[0]._id)
                      .then(response => {
                        if (
                          !this.state.jobs[0].savedJob === false ||
                          !!this.state.jobs[0].savedJob === true
                        ) {
                          console.log("updatesaved", response.data);
                          alert(
                            "Your Job at " +
                              this.state.jobs[0].title +
                              " is saved successfully"
                          );
                          this.setState({ saveText: "SAVED" });
                        }
                      });
                      */
                    var val = {
                      jobid: this.state.jobs[0],
                      title: this.state.jobs[0].title,
                      location: this.state.jobs[0].location,
                      experience: this.state.jobs[0].experience,
                      image: this.state.jobs[0].image,
                      description: this.state.jobs[0].description,
                      workrole: this.state.jobs[0].workrole,
                      qualification: this.state.jobs[0].qualification,
                      emptype: this.state.jobs[0].emptype,
                      jobfunct: this.state.jobs[0].jobfunct,
                      jobindustry: this.state.jobs[0].jobindustry
                    };

                    axios.post("/api/sjobs", val).then(res => {
                      if (res.statusText === "OK") {
                        alert(
                          "Your Job at " +
                            this.state.jobs[0].title +
                            " is saved successfully"
                        );
                        this.setState({ saveText: "SAVED" });
                      }
                    });
                  }}
                >
                  <span>{this.state.saveText}</span>
                </button>
                <button class="apply" onClick={this.handleShow.bind(this)}>
                  APPLY
                </button>

                <Modal
                  show={this.state.show}
                  onHide={this.handleClose.bind(this)}
                >
                  <Modal.Header closeButton>
                    <Modal.Title>Profile Checkout</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <h4>Quick Fill</h4>
                    <p>
                      Duis mollis, est non commodo luctus, nisi erat porttitor
                      ligula.
                    </p>

                    <h4>Popover in a modal</h4>
                    <p>
                      there is a{" "}
                      <OverlayTrigger overlay={popover}>
                        <a href="#popover">popover</a>
                      </OverlayTrigger>{" "}
                      here
                    </p>

                    <h4>Tooltips in a modal</h4>
                    <p>
                      there is a{" "}
                      <OverlayTrigger overlay={tooltip}>
                        <a href="#tooltip">tooltip</a>
                      </OverlayTrigger>{" "}
                      here
                    </p>

                    <hr />
                  </Modal.Body>
                  <Modal.Footer>
                    <Button onClick={this.handleClose.bind(this)}>Close</Button>
                  </Modal.Footer>
                </Modal>
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
                  <span class="disp">{this.qualficationfetcher()}</span>
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
