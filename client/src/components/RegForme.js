import React, { Component } from "react";
import { connect } from "react-redux";
import { Button } from "react-bootstrap";

import ContactForm from "./ContactForm";
import * as actions from "../actions";

import { Animated } from "react-animated-css";
var FontAwesome = require("react-fontawesome");

class RegForme extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: null
    };
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
    //this.postResume = this.postResume.bind(this);
  }
  onFormSubmit(e) {
    e.preventDefault(); // Stop form submit
    this.props.postResume(this.state.file);
  }
  onChange(e) {
    this.setState({ file: e.target.files[0] });
  }

  submit = values => {
    // print the form values to the console

    this.props.addData(values);
    console.log(this.props);
  };
  handleSubmit() {
    //this.props.postResume({ resume });
    console.log(this.props);
  }
  render() {
    return (
      <div>
        <Animated animationIn="zoomIn" animationOut="zoomOut" isVisible={true}>
          <div className="row">
            <div className="col-md-3 col-sm-4">
              <div className="row">
                <div className="col-md-12 col-sm-12">
                  <div className="proShow">
                    <div className="pro_head">
                      <div className="E1img">
                        <img src="" />
                      </div>
                    </div>

                    <div className="pro_body">
                      <p className="proF">
                        <br /> discription
                        <br /> some details
                        <br /> another details
                      </p>
                      <a href="/profileView" className="btn btn-md">
                        Details
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-12 col-sm-12">
                  <div className="upload">
                    <button type="submit" className="uploadBTN">
                      <span className="btnTxt">Upload Profile Image</span>
                      <span className="size">
                        <FontAwesome name="angle-double-up" />
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-9 col-sm-4">
              <div className="formSec">
                <div>
                  <h2>Edit Profile</h2>
                  <br />
                </div>
                <form className="ff">
                  <ContactForm onSubmit={this.submit} />
                  <br />
                  <Button
                    bsStyle="primary"
                    onClick={this.handleSubmit.bind(this)}
                  >
                    Upload
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </Animated>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    form: state.form,
    auth: state.auth
  };
}
export default connect(mapStateToProps, actions)(RegForme);
