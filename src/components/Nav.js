import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from "react-router-dom";


function BasicExample() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home">React-Hook</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink className='nav-link' to="/">Home</NavLink>
                        <NavLink className='nav-link' to="/timer">Timer</NavLink>
                        <NavLink className='nav-link' to="/todo">ToDo</NavLink>
                        <NavLink className='nav-link' to="/blog">Blogs</NavLink>
                        <NavLink className='nav-link' to="/form">Form</NavLink>
                        <NavLink className='nav-link' to="/search">Search</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default BasicExample;