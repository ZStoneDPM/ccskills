import React, { Component } from "react";
// import { Link } from 'react-router-dom';
import { Navbar, NavDropdown, Nav } from "react-bootstrap";
import { connect } from "react-redux";

class Header extends Component {
  render() {
    return (
      <Navbar
        bg="light"
        expand="lg"
        style={{ position: "sticky", top: 0, left: 0, right: 0, zIndex: 100 }}
      >
        <Navbar.Brand href="/">Company Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/RecipeList">Recipe List</Nav.Link>
            <NavDropdown title="Other" id="basic-nav-dropdown">
              <NavDropdown.Item href="/editRecipes">
                Edit Recipes
              </NavDropdown.Item>
              <NavDropdown.Item href="/editSpecials">
                Edit Specials
              </NavDropdown.Item>
              <NavDropdown.Item href="/map">Map</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          {/* <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form> */}
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps)(Header);
