import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navbar, Nav, Row, Container, NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { logout } from '../actions/userActions';




function Header() {
  const userLogin = useSelector(state => state.userLogin)
  const { userInfo } = userLogin

  const dispatch = useDispatch()

  const logoutHandler = () => {
    dispatch(logout())
  }

    return (
    <header>
        <Navbar bg="light" expand="lg" colapseOnSelect>
          <Container>
            <Navbar.Brand href="/">Dotsonmaps</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
               

                {userInfo ? (
                      //userInfo solo contiene token, hay que hacer un get de user/me pasando en el header el token
                      <NavDropdown title={userInfo.name} id='username'>
                          <NavDropdown.Item href='/profile'>Profile</NavDropdown.Item>            
                          <NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item>
                      </NavDropdown>

                     ) : (

                        <Nav.Link href='/login'>Login</Nav.Link>            
                     )}

              </Nav>
            </Navbar.Collapse>  
          </Container>
        </Navbar>
    </header>
    )
}

export default Header
