import React, { Component } from "react";
import { FormControl } from "react-bootstrap";

class InputField extends Component {
  render() {
    const { feedbackIcon, input, type, value, ...props } = this.props;
    return <FormControl {...input} type={type} value={value} {...props} />;
  }
}
export default InputField;
