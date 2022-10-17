import React from 'react'
import { observer } from "mobx-react-lite";
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'

const Navigation = observer(() => {
    return (
        <Navbar className='nav' collapseOnSelect expand="lg" variant='dark'>
            <Container>
                <Navbar.Brand href="/">Jae's Pathfinder</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#features">About</Nav.Link>
                        <Nav.Link href="#pricing">Resume</Nav.Link>
                        <NavDropdown href="/" title="Projects" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Project 1</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Project 2</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Project 3</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <Navbar.Text>Made by: Jae Whan Lee</Navbar.Text>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
})

export default Navigation