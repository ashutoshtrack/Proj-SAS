import React from "react";
import { Field, reduxForm } from "redux-form";
import { InputGroup } from "react-bootstrap";
import InputField from "./InputField";
var FontAwesome = require("react-fontawesome");

let ContactFormTest2 = props => {
  const { handleSubmit } = props;
  return (
    <div>
      <div className="formBox margT20">
        <form onSubmit={handleSubmit}>
          <fieldset>
            <legend>Some more Info...</legend>
            <InputGroup>
              <InputGroup.Addon>Organisation</InputGroup.Addon>
              <Field
                name="orgName"
                type="text"
                placeholder="Your current organisation"
                component={InputField}
              />
            </InputGroup>
            <br />

            <InputGroup>
              <InputGroup.Addon>
                <FontAwesome name="map-marker" />
              </InputGroup.Addon>
              <Field
                name="locationer"
                type="text"
                component={InputField}
                placeholder="Location: e.g, Mumbai"
              />
            </InputGroup>
            <br />

            <InputGroup>
              <InputGroup.Addon>
                <FontAwesome name="github" />
              </InputGroup.Addon>
              <Field
                name="ghLink"
                type="text"
                component={InputField}
                placeholder="https://www.github.com/userProfile  if you have any (optional)"
              />
            </InputGroup>
            <br />
            <button type="submit" className="btnSub">
              Save
            </button>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

ContactFormTest2 = reduxForm({
  // a unique name for the form
  form: "moredetails",
  destroyOnUnmount: false
})(ContactFormTest2);

export default ContactFormTest2;
