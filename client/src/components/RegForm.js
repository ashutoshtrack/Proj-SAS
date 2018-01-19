import React, { Component } from "react";
import { connect } from "react-redux";

import { Animated } from "react-animated-css";
import { FormGroup, InputGroup, FormControl } from "react-bootstrap";
var FontAwesome = require("react-fontawesome");

class RegForm extends Component {
  render() {
    return (
      <div>
        <Animated animationIn="zoomIn" animationOut="zoomOut" isVisible={true}>
          <div className="row">
            <div className="col-md-3 col-sm-4">
              <div className="proShow">
                <div className="pro_head">
                  <div className="E1img">
                    <img src="" />
                  </div>
                </div>

                <div className="pro_body">
                  <p className="proF">
                    Name
                    <br /> hsjkj ksk
                    <br /> jdjkjk
                    <br /> jkfkjjk
                  </p>
                  <a href="" className="btn btn-md">
                    Details
                  </a>
                </div>
              </div>
            </div>

            <div className="col-md-9 col-sm-4">
              <div className="formSec">
                <h2>Edit Profile</h2>
                <br />
                <form className="ff">
                  <fieldset>
                    <legend>Personal Info</legend>
                    <FormGroup>
                      <InputGroup>
                        <InputGroup.Addon>
                          <FontAwesome name="user-o" />
                        </InputGroup.Addon>
                        <FormControl type="text" />
                      </InputGroup>
                      <br />
                      <InputGroup>
                        <InputGroup.Addon>
                          <FontAwesome name="envelope-o" />
                        </InputGroup.Addon>
                        <FormControl type="text" />
                      </InputGroup>
                      <br />
                      <InputGroup>
                        <InputGroup.Addon>
                          <FontAwesome name="phone" />
                        </InputGroup.Addon>
                        <FormControl type="text" />
                      </InputGroup>
                      <br />
                      <InputGroup>
                        <InputGroup.Addon>
                          <FontAwesome name="map-marker" />
                        </InputGroup.Addon>
                        <FormControl
                          type="text"
                          placeholder="Location: e.g, Mumbai"
                        />
                      </InputGroup>
                      <br />
                      <InputGroup>
                        <InputGroup.Addon>
                          <FontAwesome name="facebook" />
                        </InputGroup.Addon>
                        <FormControl
                          type="text"
                          placeholder="https://www.facebook.com/userProfile"
                        />
                      </InputGroup>
                      <br />
                      <InputGroup>
                        <InputGroup.Addon>
                          <FontAwesome name="linkedin" />
                        </InputGroup.Addon>
                        <FormControl
                          type="text"
                          placeholder="https://www.linkedin.com/in/userProfile/"
                        />
                      </InputGroup>
                      <br />
                      <InputGroup>
                        <InputGroup.Addon>
                          <FontAwesome name="twitter" />
                        </InputGroup.Addon>
                        <FormControl
                          type="text"
                          placeholder="https://twitter.com/userProfile"
                        />
                      </InputGroup>
                      <br />
                    </FormGroup>
                  </fieldset>

                  <fieldset>
                    <legend>Current Profile</legend>
                    <FormGroup>
                      <InputGroup>
                        <InputGroup.Addon>Name</InputGroup.Addon>
                        <FormControl type="text" />
                      </InputGroup>
                      <br />
                      <InputGroup>
                        <InputGroup.Addon>@</InputGroup.Addon>
                        <FormControl type="text" />
                      </InputGroup>
                      <br />
                      <InputGroup>
                        <InputGroup.Addon>Phone</InputGroup.Addon>
                        <FormControl type="text" />
                      </InputGroup>
                      <br />
                      <InputGroup>
                        <InputGroup.Addon>Location</InputGroup.Addon>
                        <FormControl type="text" placeholder="e.g, Mumbai" />
                      </InputGroup>
                      <br />
                      <InputGroup>
                        <InputGroup.Addon>Name</InputGroup.Addon>
                        <FormControl type="text" />
                      </InputGroup>
                      <br />
                    </FormGroup>
                  </fieldset>

                  <fieldset>
                    <legend>Personal Info</legend>
                    <FormGroup>
                      <InputGroup>
                        <InputGroup.Addon>Name</InputGroup.Addon>
                        <FormControl type="text" />
                      </InputGroup>
                      <br />
                      <InputGroup>
                        <InputGroup.Addon>@</InputGroup.Addon>
                        <FormControl type="text" />
                      </InputGroup>
                      <br />
                      <InputGroup>
                        <InputGroup.Addon>Phone</InputGroup.Addon>
                        <FormControl type="text" />
                      </InputGroup>
                      <br />
                      <InputGroup>
                        <InputGroup.Addon>Location</InputGroup.Addon>
                        <FormControl type="text" placeholder="e.g, Mumbai" />
                      </InputGroup>
                      <br />
                      <InputGroup>
                        <InputGroup.Addon>Name</InputGroup.Addon>
                        <FormControl type="text" />
                      </InputGroup>
                      <br />
                    </FormGroup>
                  </fieldset>
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
  return { auth: state.auth };
}

export default connect(mapStateToProps)(RegForm);
