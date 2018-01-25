import React from "react";
import { connect } from "react-redux";
import { Button } from "react-bootstrap";
import resume from "../qwerty.pdf";
import ContactForm from "./ContactForm";
import * as actions from "../actions";

class RegForme extends React.Component {
  submit = values => {
    // print the form values to the console

    this.props.addData(values);
    console.log(this.props);
  };
  handleSubmit() {
    this.props.postResume({ resume });
    console.log(this.props);
  }
  render() {
    return (
      <div>
        <ContactForm onSubmit={this.submit} />
        <Button bsStyle="primary" onClick={this.handleSubmit.bind(this)}>
          Upload
        </Button>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return { form: state.form };
}
export default connect(mapStateToProps, actions)(RegForme);
