import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function NavbarComp() {
  return (
    <div>
        <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Digital Library</Navbar.Brand>
          <Nav className="me-auto">
            
            <Link to='/Login'>Login</Link>

          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavbarComp