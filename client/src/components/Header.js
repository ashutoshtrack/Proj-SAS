import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return "Still logging";

      case false:
        return (
          <ul className="right">
            <li>
              <a href="/auth/linkedin">Login with LinkedIn</a>
            </li>

            <li>
              <a href="/auth/google">Login with Google</a>
            </li>
          </ul>
        );

      default:
        return (
          <ul className="right">
            <li>
              <a href="/api/logout">Logout</a>
            </li>
            <li>
              <h6>Hi! User </h6>
            </li>
          </ul>
        );
    }
  }

  render() {
    console.log(this.props);
    return (
      <nav>
        <div className="nav-wrapper">
          <a className="left brand-logo">Saas</a>
          {this.renderContent()}
        </div>
      </nav>
    );
  }
}
function mapStateToProps(state) {
  return { auth: state.auth };
}

export default connect(mapStateToProps, null)(Header);
