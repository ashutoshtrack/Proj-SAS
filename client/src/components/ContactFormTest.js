import React from "react";
import { Field, reduxForm } from "redux-form";
import { InputGroup } from "react-bootstrap";
import { connect } from "react-redux";
import InputField from "./InputField";
var FontAwesome = require("react-fontawesome");

let ContactFormTest = props => {
  const { handleSubmit } = props;
  return (
    <div>
      <div class="formBox">
        <form onSubmit={handleSubmit}>
          <fieldset>
            <legend>Personal Information</legend>
            <InputGroup>
              <InputGroup.Addon>
                <FontAwesome name="user-o" />
              </InputGroup.Addon>
              <Field
                name="firstName"
                type="text"
                placeholder="Enter Full Name"
                component={InputField}
              />
            </InputGroup>
            <br />
            <InputGroup>
              <InputGroup.Addon>
                <FontAwesome name="envelope-o" />
              </InputGroup.Addon>
              <Field
                name="email"
                type="email"
                placeholder="Enter Your Email"
                component={InputField}
              />
            </InputGroup>
            <br />

            <InputGroup>
              <InputGroup.Addon>
                <FontAwesome name="phone" />
              </InputGroup.Addon>
              <Field
                name="phoneno"
                type="number"
                placeholder="Enter Your Phone Number"
                component={InputField}
              />
            </InputGroup>

            <br />
            <button type="submit" class="btnSub">
              Save
            </button>
          </fieldset>
        </form>
      </div>
      {/* End of Form 1*/}
    </div>
  );
};

ContactFormTest = reduxForm({
  // a unique name for the form
  form: "basicdetails"
})(ContactFormTest);
function mapStateToProps(state) {
  return { auth: state.auth };
}
export default connect(mapStateToProps, null)(ContactFormTest);
