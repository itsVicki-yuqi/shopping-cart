import React from 'react';

import { Navbar, Nav, Form, FormControl } from 'react-bootstrap';
import logoImage from '../images/logo.png';

function Header() {
      return (
            <Navbar expand="lg" bg="light" variant="light" href="/">
                  <Navbar.Brand href="#home">
                        <img alt="logo" src={logoImage} width="40" height="40" className="d-inline-block"/>{' '}
                        YS Shopping
                  </Navbar.Brand>
                  <Nav className="mr-auto">
                        <Nav.Link href="women">WOMEN</Nav.Link>
                        <Nav.Link href="men">MEN</Nav.Link>
                        <Nav.Link href="kids">KIDS</Nav.Link>
                        <Nav.Link href="accessories">ACCESSORIES</Nav.Link>
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
