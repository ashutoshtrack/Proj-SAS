import React from "react";
import { connect } from "react-redux";
import { Button } from "react-bootstrap";

import ContactForm from "./ContactForm";
import * as actions from "../actions";

class RegForme extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      file: null
    };
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
    //this.postResume = this.postResume.bind(this);
  }
  onFormSubmit(e) {
    e.preventDefault(); // Stop form submit
    this.props.postResume(this.state.file);
  }
  onChange(e) {
    this.setState({ file: e.target.files[0] });
  }

  submit = values => {
    // print the form values to the console

    this.props.addData(values);
    console.log(this.props);
  };
  handleSubmit() {
    // this.props.postResume({ file });
    console.log(this.props);
  }
  render() {
    return (
      <div>
        <ContactForm onSubmit={this.submit} />
        <form onSubmit={this.onFormSubmit}>
          <h1>Resume Upload</h1>
          <input type="file" onChange={this.onChange} />
          <Button type="submit" bsStyle="primary">
            Upload
          </Button>
        </form>
        )
      </div>
    );
  }
}
function mapStateToProps(state) {
  return { form: state.form };
}
export default connect(mapStateToProps, actions)(RegForme);
