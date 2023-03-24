import React,{Component} from "react";
import { NavLink } from "react-router-dom";
import {Container, Nav , Navbar, NavDropdown} from 'react-bootstrap';


export default class Menubar extends Component {
    render(){
        return (
            <Navbar className='bg-dark shadow-sm mb-3' variant="dark" sticky="top" expand="lg">
                <Container fluid>
                    <Navbar.Brand href='/'>
                        <img alt="" src="./u.gif" className="App-logo img-fluid"/>{' '}My Portfolio
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                       
                        <NavDropdown title="Menu Profile" id="basic-nav-dropdoown">

                            <NavDropdown.Item><NavLink to="/" className="nav-link text-dark">หน้าหลัก</NavLink></NavDropdown.Item>

                            <NavDropdown.Item><NavLink to="/about" className="nav-link text-dark">เกี่ยวกับตัวฉัน</NavLink></NavDropdown.Item>

                            <NavDropdown.Item><NavLink to="/contact" className="nav-link text-dark">ติดต่อได้ที่</NavLink></NavDropdown.Item>

                            <NavDropdown.Item><NavLink to="/create-student" className="nav-link text-dark">Create New data</NavLink></NavDropdown.Item>
                            
                            <NavDropdown.Item><NavLink to="/student-list" className="nav-link text-dark">Data list</NavLink></NavDropdown.Item>

                        </NavDropdown>
                        </Nav>

                        <Nav>

                            <Navbar.Text>Signed in as : Atiwan</Navbar.Text>

                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        )
    }
}