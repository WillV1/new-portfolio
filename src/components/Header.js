import React from 'react';
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';


const Header = () => {
    
  return (
    <Container fluid={true}>
      <Navbar sticky="top" className="border-bottom" bg="light" expand="lg">
        <Navbar.Brand>William VanHook</Navbar.Brand>
        <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
        <Navbar.Collapse id="navbar-toggle">
          <Nav className="ml-auto">
            <Link className="nav-link" to="/"><p>Home</p></Link>
            <Link className="nav-link" to="/bootcamp"><p>Collection</p></Link>
            <Link className="nav-link" to="/contact"><p>Contact</p></Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
     
    </Container>
  );

}

export default Header;