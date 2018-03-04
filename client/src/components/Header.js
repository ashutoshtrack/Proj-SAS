import React, { Component } from "react";
import { connect } from "react-redux";
//import { Link } from "react-router-dom";
import { Navbar, NavItem, Nav, NavDropdown, MenuItem } from "react-bootstrap";
var FontAwesome = require("react-fontawesome");

class Header extends Component {
  renderContent() {
    const Droptitle = (
      <span class="gearSize">
        <FontAwesome name="cogs" />
      </span>
    );
    switch (this.props.auth) {
      case null:
        return (
          <Navbar.Collapse>
            <Nav pullRight>
              <NavItem eventKey={5}>Processing</NavItem>
            </Nav>
          </Navbar.Collapse>
        );

      case false:
        return (
          <Navbar.Collapse>
            <Nav pullRight>
              <NavItem eventKey={1}>About Us</NavItem>
              <NavItem eventKey={2}>Stats</NavItem>
              <NavItem eventKey={3} href="#abc">
                Get In
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        );

      default:
        return (
          <Navbar.Collapse>
            <Nav pullRight>
              <NavItem>
                <img
                  src="http://qnimate.com/wp-content/uploads/2014/03/images2.jpg"
                  class="navPic"
                />&nbsp;&nbsp;
                {this.props.auth.userName}
              </NavItem>
              <NavDropdown
                eventKey={3}
                title={Droptitle}
                id="basic-nav-dropdown"
              >
                <MenuItem eventKey={3.1}>
                  Edit Profile
                  <span class="iconSize">
                    <FontAwesome name="edit" />
                  </span>
                </MenuItem>
                <MenuItem eventKey={3.2}>
                  View Profile
                  <span class="iconSize">
                    <FontAwesome name="eye" />
                  </span>
                </MenuItem>
                <MenuItem eventKey={3.3}>
                  Save JobList
                  <span class="iconSize">
                    <FontAwesome name="bookmark" />
                  </span>
                </MenuItem>
                <MenuItem divider />
                <MenuItem eventKey={3.3} href="/api/logout">
                  Logout
                  <span class="iconSize">
                    <FontAwesome name="sign-out" />
                  </span>
                </MenuItem>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
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
      <Navbar inverse collapseOnSelect class="navDeco">
        <Navbar.Header>
          <Navbar.Brand>
            <a href="/new">Stud-Start</a>
          </Navbar.Brand>
          <Navbar.Toggle />
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
