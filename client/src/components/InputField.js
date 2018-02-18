import React, { Component } from "react";
import { FormControl } from "react-bootstrap";

class InputField extends Component {
  render() {
    const { feedbackIcon, input, type, ...props } = this.props;
    return <FormControl {...input} type={type} {...props} />;
  }
}
export default InputField;
