import React, { useState } from 'react';
import {Navbar,Nav,NavDropdown,Container, Alert, Button} from 'react-bootstrap';
import { Link, useHistory } from "react-router-dom"
import "../layout/NavBar.css";

import { useAuth } from "../firebase/context"




function NavBar() 
{
  const [error, setError] = useState("")
  const { currentUser, logout } = useAuth()
  const history = useHistory()

  async function handleLogout() {
    setError("")

    try {
      await logout()
      history.push("/login")
    } catch {
      setError("Failed to log out")
    }
  }
  
  
   return (
    <Navbar collapseOnSelect expand="xl" className="navbar" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to={"/"}>
          <img
              src="/images/carApp.png"
              width="30"
              height="30"
            
              alt="React Bootstrap logo"
            />{' '}
            Car App
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
            <Nav.Link className="navlink" as={Link} to={"/buy"}>Buy</Nav.Link>

              <NavDropdown className="navlink" title="Sell" >
                <NavDropdown.Item className="navlink-Item" as={Link} to={"/sell"}>Publish your car</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown className="navlink"  title="Services" >
                <NavDropdown.Item className="navlink-Item" as={Link} to={"/evaluate"}>Evaluate your car</NavDropdown.Item>
              </NavDropdown>

              <Nav.Link className="navlink" as={Link} to={"/"}>Pricing</Nav.Link>
              <Nav.Link className="navlink" as={Link} to={"/contact-us"}>Contact Us</Nav.Link>
              <Nav.Link className="navlink" as={Link} to={"/about"}>About</Nav.Link>
        
            </Nav>
            {currentUser == null ?
            <Nav> 
            
            
              <Nav.Link className="navlink" as={Link} to={"/register"}>Register</Nav.Link>
              <Nav.Link className="navlink" as={Link} to={"/login"}>Login</Nav.Link>
            
            
            </Nav> : 
            <Nav> 
            
            <Nav.Link className="navlink" as={Link} to={"/profile"}>Profile</Nav.Link>
            <Button className="btn btn-primary border-r" onClick={handleLogout}>Logout</Button>
            
          
          
          </Nav>
}

          </Navbar.Collapse>
      </Container>
      {error && <Alert variant="danger">{error}</Alert>}
    </Navbar>     
    );
   }

export default NavBar;


