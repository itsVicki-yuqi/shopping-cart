import React from 'react';

import { Navbar, Nav, Form, FormControl } from 'react-bootstrap';
import logoImage from '../images/logo.png';
import {BrowserRouter, Link } from 'react-router-dom';

function Header() {
      return (
            <Navbar expand="lg" bg="light" variant="light" href="/">
                  <Navbar.Brand href="#home">
                  <BrowserRouter>
                        <Link to="/">
                        <img alt="logo" src={logoImage} width="40" height="40" className="d-inline-block"/>{' '}
                        YS Shopping</Link>
                  </BrowserRouter>
                  </Navbar.Brand>
                  <Nav className="mr-auto">
                        <Nav.Link to="/women">WOMEN</Nav.Link>
                        <Nav.Link to="/men">MEN</Nav.Link>
                        <Nav.Link to="/kids">KIDS</Nav.Link>
                        <Nav.Link to="/accessories">ACCESSORIES</Nav.Link>
                   </Nav>
                  <Nav className="justify-content-end">
                        <Nav.Link>Sign in</Nav.Link>
                  </Nav>
                  <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                  </Form>
            </Navbar>
      )
}

export default Header;
