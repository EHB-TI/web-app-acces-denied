import React from 'react';
import {Navbar,Nav,NavDropdown,Container} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import "../layout/NavBar.css";




function NavBar(props) 
{
  
  
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
            {!props.bool ?
            <Nav> 
            
            
              <Nav.Link className="navlink" as={Link} to={"/register"}>Register</Nav.Link>
              <Nav.Link className="navlink" as={Link} to={"/login"}>Login</Nav.Link>
            
            
            </Nav> : 
            <Nav> 
            
            
            <Nav.Link className="navlink" as={Link} to={"/logout"}>Logout</Nav.Link>
            
          
          
          </Nav>
}

          </Navbar.Collapse>
      </Container>
    </Navbar>     
    );
   }

export default NavBar;


