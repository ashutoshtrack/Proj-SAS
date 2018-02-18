import React from "react";
import { Field, reduxForm } from "redux-form";
import { InputGroup } from "react-bootstrap";
import InputField from "./InputField";

let ContactFormTest = props => {
  const { handleSubmit } = props;
  return (
    <div>
      <div class="formBox margT20">
        <form onSubmit={handleSubmit}>
          <fieldset>
            <legend>Project</legend>
            <InputGroup>
              <InputGroup.Addon>Project Name</InputGroup.Addon>
              <Field name="projName" type="text" component={InputField} />
            </InputGroup>
            <br />

            <div class="width600">
              <InputGroup>
                <InputGroup.Addon>Project Link</InputGroup.Addon>
                <Field name="projLink" type="text" component={InputField} />
              </InputGroup>
            </div>
            <button type="submit" class="btnSub2">
              Add
            </button>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

ContactFormTest = reduxForm({
  // a unique name for the form
  form: "projdetails"
})(ContactFormTest);

export default ContactFormTest;
