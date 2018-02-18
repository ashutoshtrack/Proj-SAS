import React, { Component } from "react";
import { connect } from "react-redux";
import ContactFormTest from "./ContactFormTest";
import ContactFormTest2 from "./ContactFormTest2";
import * as actions from "../actions";

import { Animated } from "react-animated-css";

class RegForme extends Component {
  submit1 = values => {
    // print the form values to the console

    this.props.updateData(values);
    console.log(this.props);
  };
  submit = values => {
    // print the form values to the console

    this.props.addData(values);
    console.log(this.props);
  };
  renderContent() {
    switch (this.props.respo) {
      case null:
        return <ContactFormTest onSubmit={this.submit} />;

      case false:
        return <ContactFormTest onSubmit={this.submit} />;

      default:
        return <ContactFormTest2 onSubmit={this.submit1} />;
    }
  }

  render() {
    return (
      <div>
        <Animated
          animationIn="bounceInUp"
          animationOut="bounceInRight"
          isVisible={true}
        >
          <div className="col-md-12 col-sm-4">
            <div className="formSec">
              <div>
                <h2>Hey {this.props.auth.userName}, register here!</h2>
                <br />
              </div>
              <form className="ff">{this.renderContent()}</form>
            </div>
          </div>
        </Animated>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    form: state.form,
    auth: state.auth,
    respo: state.respo
  };
}
export default connect(mapStateToProps, actions)(RegForme);
