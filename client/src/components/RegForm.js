import React, { Component } from "react";
import { Animated } from "react-animated-css";
import { FormGroup, InputGroup, FormControl } from "react-bootstrap";
var FontAwesome = require("react-fontawesome");

class RegForm extends Component {
  render() {
    return (
      <div>
        <Animated animationIn="zoomIn" animationOut="zoomOut" isVisible={true}>
          <div className="row">
            <div class="col-md-3 col-sm-4">
              <div class="proShow">
                <div class="pro_head">
                  <div class="E1img">
                    <img src="" />
                  </div>
                </div>

                <div class="pro_body">
                  <p class="proF">
                    Name
                    <br /> hsjkj ksk
                    <br /> jdjkjk
                    <br /> jkfkjjk
                  </p>
                  <a href="" class="btn btn-md">
                    Details
                  </a>
                </div>
              </div>
            </div>

            <div class="col-md-9 col-sm-4">
              <div class="formSec">
                <h2>Edit Profile</h2>
                <br />
                <form class="ff">
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

export default RegForm;
