import React from "react";
import { Field, reduxForm } from "redux-form";
import { InputGroup } from "react-bootstrap";
import InputField from "./InputField";
var FontAwesome = require("react-fontawesome");

let ContactForm = props => {
  const { handleSubmit } = props;
  return (
    <div>
      <div className="formBox">
        <form onSubmit={handleSubmit}>
          <fieldset>
            <legend>Personal Info</legend>
            <InputGroup>
              <InputGroup.Addon>
                <FontAwesome name="user-o" />
              </InputGroup.Addon>
              <Field name="firstName" type="text" component={InputField} />
            </InputGroup>
            <br />
            <InputGroup>
              <InputGroup.Addon>
                <FontAwesome name="envelope-o" />
              </InputGroup.Addon>
              <Field name="email" type="email" component={InputField} />
            </InputGroup>
            <br />
            <InputGroup>
              <InputGroup.Addon>
                <FontAwesome name="phone" />
              </InputGroup.Addon>
              <Field
                name="phoneno"
                type="text"
                component={InputField}
                type="number"
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
          </fieldset>
          <br />
          <fieldset>
            <legend>Links</legend>
            <InputGroup>
              <InputGroup.Addon>
                <FontAwesome name="facebook" />
              </InputGroup.Addon>
              <Field
                name="fbLink"
                type="text"
                component={InputField}
                placeholder="https://www.facebook.com/userProfile"
              />
            </InputGroup>
            <br />
            <InputGroup>
              <InputGroup.Addon>
                <FontAwesome name="linkedin" />
              </InputGroup.Addon>
              <Field
                name="inLink"
                type="text"
                component={InputField}
                placeholder="https://www.linkedin.com/in/userProfile/"
              />
            </InputGroup>
            <br />
            <InputGroup>
              <InputGroup.Addon>
                <FontAwesome name="twitter" />
              </InputGroup.Addon>
              <Field
                name="twLink"
                type="text"
                component={InputField}
                placeholder="https://twitter.com/userProfile"
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
                placeholder="https://www.github.com/userProfile"
              />
            </InputGroup>
            <br />
            <InputGroup>
              <InputGroup.Addon>
                <FontAwesome name="stack-overflow" />
              </InputGroup.Addon>
              <Field
                name="soLink"
                type="text"
                component={InputField}
                placeholder="https://stackoverflow.com/userProfile"
              />
            </InputGroup>
            <br />
            <InputGroup>
              <InputGroup.Addon>
                <FontAwesome name="globe" />
              </InputGroup.Addon>
              <Field
                name="webLink"
                type="text"
                component={InputField}
                placeholder="https://userProfile.com/"
              />
            </InputGroup>
          </fieldset>
          <br />
          <fieldset>
            <legend>Academics Info</legend>
            <InputGroup>
              <InputGroup.Addon>
                <FontAwesome name="graduation-cap " />
              </InputGroup.Addon>
              <Field
                name="eduInfo"
                type="text"
                component={InputField}
                placeholder="college name"
              />
            </InputGroup>
            <br />
            <div className="width400">
              <InputGroup>
                <InputGroup.Addon>Year of Passing</InputGroup.Addon>
                <Field
                  name="passDate"
                  type="text"
                  component={InputField}
                  placeholder="e.g. mm/yyyy"
                />
              </InputGroup>
            </div>
            <button type="submit" className="btnSub">
              Save
            </button>
          </fieldset>
        </form>
      </div>

      <div className="formBox margT20">
        <form onSubmit={handleSubmit}>
          <fieldset>
            <legend>Project</legend>
            <InputGroup>
              <InputGroup.Addon>Project Name</InputGroup.Addon>
              <Field name="projName" type="text" component={InputField} />
            </InputGroup>
            <br />
            <div className="width600">
              <Field
                name="projDis"
                type="text"
                componentclassname="textarea"
                component={InputField}
                placeholder="Project Description"
              />
            </div>
            <br />
            <div className="width600">
              <InputGroup>
                <InputGroup.Addon>Project Link</InputGroup.Addon>
                <Field name="projLink" type="text" component={InputField} />
              </InputGroup>
            </div>
            <button type="submit" className="btnSub2">
              Add
            </button>
          </fieldset>
        </form>
      </div>

      <div className="formBox margT20">
        <form onSubmit={handleSubmit}>
          <fieldset>
            <legend>Skills</legend>
            <div className="width500">
              <Field
                name="skill"
                type="text"
                component={InputField}
                placeholder="e.g.- Programming"
              />
            </div>
            <button type="submit" className="btnSkill">
              Add
            </button>
          </fieldset>
        </form>
      </div>

      <div className="formBox margT20">
        <form onSubmit={handleSubmit}>
          <fieldset>
            <legend>Work Experience</legend>
            <div className="width600">
              <InputGroup>
                <InputGroup.Addon>Company Name</InputGroup.Addon>
                <Field name="compName" type="text" component={InputField} />
              </InputGroup>
              <br />
              <InputGroup>
                <InputGroup.Addon>Job Profile</InputGroup.Addon>
                <Field name="jobPro" type="text" component={InputField} />
              </InputGroup>
              <br />
              <InputGroup>
                <InputGroup.Addon>
                  <FontAwesome name="link" />
                </InputGroup.Addon>
                <Field name="jobPro" type="text" component={InputField} />
              </InputGroup>
            </div>
            <button type="submit" className="btnSkill">
              Add
            </button>
          </fieldset>
        </form>
      </div>
      <div className="formBox margT20">
        <form onSubmit={handleSubmit}>
          <fieldset>
            <legend>Certification</legend>
            <InputGroup>
              <InputGroup.Addon>Certification Name</InputGroup.Addon>
              <Field name="projName" type="text" component={InputField} />
            </InputGroup>
            <br />
            <div className="width600">
              <InputGroup>
                <InputGroup.Addon>
                  <FontAwesome name="link" />
                </InputGroup.Addon>
                <Field
                  name="certLink"
                  type="text"
                  component={InputField}
                  placeholder="certificate link"
                />
              </InputGroup>
            </div>
            <button type="submit" className="btnSub2">
              Add
            </button>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

ContactForm = reduxForm({
  // a unique name for the form
  form: "contact"
})(ContactForm);

export default ContactForm;
