import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import NavDropdown from "react-bootstrap/NavDropdown";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

export default function header() {
  return (
    <Navbar bg="primary" variant="dark">
      <Navbar.Brand href="#home">Rentage</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#ups">UPS</Nav.Link>
        <Nav.Link href="#tables">Tables</Nav.Link>
        <Nav.Link href="#chairs">Chairs</Nav.Link>
      </Nav>

      <Nav>
        <Nav.Link href="#">
          <i class="fas fa-shopping-cart"></i>
        </Nav.Link>
      </Nav>
      <Button variant="outline-light">Login</Button>
      <Button variant="outline-light">Sign Up</Button>
      {/* <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-light">Search</Button>
      </Form> */}
    </Navbar>
  );
}
