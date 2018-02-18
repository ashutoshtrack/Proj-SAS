import React, { Component } from "react";
import { connect } from "react-redux";
//import { Link } from "react-router-dom";
import { Navbar, NavItem, Nav } from "react-bootstrap";

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return (
          <Nav pullRight>
            <NavItem eventKey={5}>Processing</NavItem>
          </Nav>
        );

      case false:
        return (
          <Nav pullRight>
            <NavItem eventKey={1}>About Us</NavItem>
            <NavItem eventKey={2}>Stats</NavItem>
            <NavItem eventKey={3} href="#abc">
              Get In
            </NavItem>
          </Nav>
        );

      default:
        return (
          <Nav pullRight>
            <NavItem eventKey={3} href="/api/logout">
              Logout
            </NavItem>
            <NavItem eventKey={4}>Hi, {this.props.auth.userName}</NavItem>
          </Nav>
          /* <ul className="right">
            <li>
              <a href="/api/logout">Logout</a>
            </li>
            <li>
              <h6>Hi! User </h6>
            </li>
          </ul>
          */
        );
    }
  }

  render() {
    console.log(this.props);
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#home">Stud-Start</a>
          </Navbar.Brand>
        </Navbar.Header>
        {this.renderContent()}
      </Navbar>
      /*   <nav>
        <div className="nav-wrapper">
          <a className="left brand-logo">Saas</a>
          {this.renderContent()}
        </div>
      </nav>*/
    );
  }
}
function mapStateToProps(state) {
  return { auth: state.auth };
}

export default connect(mapStateToProps, null)(Header);
