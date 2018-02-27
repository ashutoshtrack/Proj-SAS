import React, { Component } from "react";
import { connect } from "react-redux";
import ContactFormTest from "./ContactFormTest";
import ContactFormTest2 from "./ContactFormTest2";
import * as actions from "../actions";

import { Animated } from "react-animated-css";
import Dashboard from "./Dashboard";

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
        return (
          <div>
            <Animated
              animationIn="bounceInDown"
              animationOut="bounceInRight"
              isVisible={true}
            >
              <div>
                <h2>Hey {this.props.auth.userName}, quick register here!</h2>
                <br />
              </div>
            </Animated>
            <Animated
              animationIn="bounceInUp"
              animationOut="bounceInRight"
              isVisible={true}
              animationInDelay={0.5}
            >
              <form className="ff">
                <ContactFormTest onSubmit={this.submit} />
              </form>
            </Animated>
          </div>
        );

      case false:
        return (
          <div>
            <Animated
              animationIn="bounceInDown"
              animationOut="bounceInRight"
              isVisible={true}
            >
              <div>
                <h2>Hey {this.props.auth.userName}, quick register here!</h2>
                <br />
              </div>
            </Animated>
            <Animated
              animationIn="bounceInUp"
              animationOut="bounceInRight"
              isVisible={true}
              animationInDelay={0.5}
            >
              <form className="ff">
                <ContactFormTest onSubmit={this.submit} />
              </form>
            </Animated>
          </div>
        );

      default:
        if (this.props.respo.orgName != null) {
          return <Dashboard />;
        } else {
          return (
            <div>
              <div>
                <Animated
                  animationIn="fadeInUp"
                  animationOut="bounceOutUp"
                  isVisible={true}
                  animationInDelay={1.5}
                >
                  <h2>One more to go..dear {this.props.auth.userName}</h2>
                </Animated>
                <br />
              </div>

              <form className="ff">
                <Animated animationIn="wobble" isVisible={true}>
                  <ContactFormTest2 onSubmit={this.submit1} />
                </Animated>
              </form>
            </div>
          );
        }
    }
  }

  render() {
    return (
      <div>
        <div className="col-md-12 col-sm-4">
          <div className="formSec">{this.renderContent()}</div>
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    form: state.form,
    auth: state.auth,
    respo: state.respo.respo
  };
}
export default connect(mapStateToProps, actions)(RegForme);
