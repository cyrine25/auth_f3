import React from 'react'
import { Navbar,Nav,Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
const NaviBar = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/Profile">Profile</Nav.Link>
    </Nav>
    
      
      <Button variant="outline-info"><Link to="/registre">Registre</Link></Button>
      <Button variant="outline-info"><Link to="/login">Login</Link></Button>
    
  </Navbar>
        </div>
    )
}

export default NaviBar
