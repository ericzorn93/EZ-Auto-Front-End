import React from "react";
import { Navbar, Nav, Form, Button, FormControl } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./navbar.css";

const Navigation = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand>
          <Link to="/">EZ-Auto</Link>
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/mercedes-benz" className="nav-link">
            Mercedes-Benz
          </Link>
          <Link to="/bmw" className="nav-link">
            BMW
          </Link>
          <Link to="/audi" className="nav-link">
            Audi
          </Link>
          <Link to="/lexus" className="nav-link">
            Lexus
          </Link>
          <Link to="/acura" className="nav-link">
            Acura
          </Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info">Search</Button>
        </Form>
      </Navbar>
    </>
  );
};

export default Navigation;
