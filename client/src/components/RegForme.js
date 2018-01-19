import React from "react";
import { connect } from "react-redux";
import ContactForm from "./ContactForm";
import * as actions from "../actions";

class RegForme extends React.Component {
  submit = values => {
    // print the form values to the console

    this.props.addData(values);
    console.log(this.props);
  };
  render() {
    return <ContactForm onSubmit={this.submit} />;
  }
}
function mapStateToProps(state) {
  return { form: state.form };
}
export default connect(mapStateToProps, actions)(RegForme);
