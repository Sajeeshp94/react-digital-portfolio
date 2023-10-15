// import React from 'react'
import { Nav ,Navbar,Container} from 'react-bootstrap'
import { Link } from 'react-router-dom'


function Header() {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand as={Link} to="/react-digital-portfolio">Portfolio</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/react-digital-portfolio">Home</Nav.Link>
            <Nav.Link as ={Link} to="/about">About</Nav.Link>
            <Nav.Link as ={Link} to="/projects">Projects </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  )
}

export default Header