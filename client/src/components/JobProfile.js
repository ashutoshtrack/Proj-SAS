import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { Animated } from "react-animated-css";
import { InputGroup, ProgressBar } from "react-bootstrap";
import InputField from "./InputField";
import { Field, reduxForm } from "redux-form";
import axios from "axios";
import * as actions from "../actions";

//var FontAwesome = require("react-fontawesome");
//import { Navbar, NavItem, Nav, NavDropdown, MenuItem } from "react-bootstrap";
var counter = 0;
var counter2 = 0;
var counter3 = 0;

class JobProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jobs: null,
      show: false,
      file: null,
      saveText: "SAVE",
      apply: "APPLY"
    };
    console.log(props, "constru");
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  componentWillMount() {
    console.log("this is the bommb", window.location);
    axios
      .get("/api" + window.location.pathname)
      .then(response => this.setState({ jobs: response.data }));
  }

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
  docheckerapplier(ider) {
    console.log("inside dochecker applier");
    axios.get("/api/resume/" + ider).then(response => {
      if (response.data === null) {
        console.log("lemon", response);

        console.log("empty apply", response);
        this.setState({ apply: "APPLY" });
      } else {
        console.log("apply text", response);
        this.setState({ apply: "APPLIED" });
      }
    });
  }

  handleSubmitter() {
    alert("he");
  }

  //file upload handler
  onFormSubmit(e) {
    e.preventDefault(); // Stop form submit
    this.props.postResume(this.state.file);
  }
  onChange(e) {
    this.setState({ file: e.target.files[0] });
  }
  // end of an file uploader

  render() {
    console.log(this.state.jobs);

    console.log(this.props.mongoresp, "poppo");

    if (counter2 === 0) {
      if (
        !this.props.mongoresp.mongoresp === null ||
        !this.props.mongoresp.mongoresp === false
      ) {
        if (this.props.mongoresp.mongoresp.message === "Success") {
          this.setState({ show: false, apply: "APPLIED" });
          var kimat = {
            jobid: this.state.jobs[0],
            resumepath:
              "/api/img/" + this.props.mongoresp.mongoresp.file.filename,
            viewprofilepath: "/viewprofile/" + this.props.auth._id
          };
          axios.post("/api/resume", kimat).then(res => {
            if (res.statusText === "OK") {
              alert("Done!");
            }
          });
          console.log("execute this");
          counter2++;
        }
      }
    }
    if (!this.state.jobs === null || !this.state.jobs === false) {
      console.log("jobbyprofiler", this.state.jobs[0].title);

      if (counter === 0) {
        this.dochecker(this.state.jobs[0]._id);
        counter++;
      }
      if (counter3 === 0) {
        console.log("fired");
        this.docheckerapplier(this.state.jobs[0]._id);
        counter3++;
      }

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
                  <span class="bld">
                    &nbsp;{this.state.jobs[0].job_profile}
                  </span>
                  <br />
                  <span class="name">&nbsp;{this.state.jobs[0].title}</span>
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

                    if (this.state.saveText === "SAVED") {
                      alert("Already Saved!");
                    } else {
                      var val = {
                        jobid: this.state.jobs[0],
                        title: this.state.jobs[0].title,
                        job_profile: this.state.jobs[0].job_profile,
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
                    }
                  }}
                >
                  <span>{this.state.saveText}</span>
                </button>
                <button
                  class="apply"
                  onClick={() => {
                    if (this.state.saveText === "APPLIED") {
                      alert("Already Applied With " + this.state.jobs[0].title);
                    } else {
                      this.setState({ show: true });
                    }
                  }}
                >
                  {this.state.apply}
                </button>

                <Modal
                  show={this.state.show}
                  onHide={this.handleClose.bind(this)}
                >
                  <Modal.Header closeButton>
                    <Modal.Title>Profile Checkout</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <form onSubmit={this.onFormSubmit}>
                      <fieldset>
                        <div className="col-md-12">
                          <ProgressBar active now={60} label={`60%`} />;
                        </div>
                        <br />
                        <div className="col-md-6  form-group">
                          <label class="col-md-12 control-label">
                            Attach PDF
                          </label>
                          <div class="col-md-12">
                            <Field
                              type="file"
                              id="inputFile"
                              required
                              onChange={this.onChange}
                              component={InputField}
                            />
                          </div>
                        </div>
                      </fieldset>
                      <Button type="submit" bsStyle="primary">
                        Submit
                      </Button>
                    </form>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button type="submit" bsStyle="primary">
                      Close
                    </Button>
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

JobProfile = reduxForm({
  // a unique name for the form
  form: "jobber"
})(JobProfile);
function mapStateToProps(state) {
  return { mongoresp: state.mongoresp, auth: state.auth };
}
export default connect(mapStateToProps, actions)(JobProfile);
