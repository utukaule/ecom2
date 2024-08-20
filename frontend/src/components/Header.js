import React from "react";
import {Link} from 'react-router-dom'
import { Navbar, Nav, Container } from "react-bootstrap";
const Header = () => {
  return (
    <header>
      <Navbar expand="lg" className="bg-dark" variant="dark" collapseOnSelect>
        <Container>
          <Navbar.Brand href="/">ShopShop</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto text-white">
              <Link to="/cart ">
                <i className="fas fa-shopping-cart text-white"></i> <span className="text-white">
                Cart</span>
              </Link>
              <Link to="/login" className="ms-3 ">
                <i className="fas fa-user text-white"></i> <span className="text-white">
                Sign In</span>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );  
};

export default Header;
