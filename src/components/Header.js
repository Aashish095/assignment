import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { logout } from '../actions/userActions'


function Header() {
    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    const dispatch = useDispatch()

    const logoutHandler = () => {
        dispatch(logout())
    }

    return (
        <header>
            <Navbar bg='light' expand='lg'>
                <Container>
                    <LinkContainer to='/'>
                        <Navbar.Brand>Assignment</Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <LinkContainer to="/thanks">
                                <Nav.Link>Thanks😁</Nav.Link>
                            </LinkContainer>
                        </Nav>
                        <Nav>
                            {userInfo ? (
                                <LinkContainer title={userInfo.name} to="username">
                                    <Nav.Link>Profile</Nav.Link>
                                    <Nav.Link onClick={logoutHandler}></Nav.Link>
                                </LinkContainer>
                            ) : (
                                <LinkContainer to="/login">
                                    <Nav.Link>
                                        <i className='fas fa-user'></i>Sign In
                                    </Nav.Link>
                                </LinkContainer>
                            )}
                        </Nav>
                    </Navbar.Collapse>
                </Container>

            </Navbar>

        </header>
    )
}

export default Header
