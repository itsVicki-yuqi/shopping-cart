import React from 'react';
import { Navbar, Nav, Form, FormControl, Image } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Header() {
      const userSignin = useSelector(state=>state.userSignin);
      const {userInfo} = userSignin;
      return (
            <Navbar expand="lg" bg="light" variant="light" style={{paddingBottom: '2rem'}} href="/">
                  <Navbar.Brand href="/">
                        <img alt="logo" src="/images/logo.png" width="40" height="40" className="d-inline-block"/>{' '}
                        YS Shopping
                  </Navbar.Brand>
                  <Nav className="mr-auto">
                        <Nav.Link href="/women">WOMEN</Nav.Link>
                        <Nav.Link href="/men">MEN</Nav.Link>
                        <Nav.Link href="/kids">KIDS</Nav.Link>
                        <Nav.Link href="/accessories">ACCESSORIES</Nav.Link>
                   </Nav>
                  <Nav className="justify-content-end">
                        <Link to="/cart"><Image alt="cart" src="/images/cartIcon.svg" width="30" height="30" style={{marginTop: '5px'}} className="d-inline-block"/></Link> 
                        
                        {
                              userInfo ? <Nav.Link href="/profile">{userInfo.name}</Nav.Link> : <Nav.Link href="/signin">Sign in</Nav.Link>
                        }
                  </Nav>
                  <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                  </Form>
            </Navbar>
      )
}

export default Header;
