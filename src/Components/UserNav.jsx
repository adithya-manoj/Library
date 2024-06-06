import axios from 'axios';
import React, { useEffect } from 'react'
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, Outlet, useNavigate } from 'react-router-dom';

const UserNav = () => {

let logoutNavigate=useNavigate();

let handleLogout=()=>{
    logoutNavigate('/')
}

useEffect(()=>{
    let fetchData=async()=>{
        let token = localStorage.getItem('token')
        let response=await axios.get('http://localhost/4000/auth',{header:{Authorization:token }
    })
    }
    fetchData();
},[])

    return (
        <>
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand href="#home">Digital Library</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/UserHome">Home</Nav.Link>
                        <Nav.Link>
                            <Button onClick={handleLogout}>Logout</Button>

                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        <Outlet/>
        </Navbar>
        </>
    )
}

export default UserNav