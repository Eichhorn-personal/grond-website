import React, {useState} from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {LinkContainer} from 'react-router-bootstrap';
import '../css/app.css';

export default function Header({handleShowLogin, handleShowSignUp}) {

    return (

        <Navbar collapseOnSelect expand='lg' className='w-100 custom-white-text'>
                        
            <Navbar.Brand href="#home" className='mb-0 ms-5 fs-6 text-start custom-white-text'>grond.ai</Navbar.Brand>

            <Navbar.Toggle aria-controls='responsive-navbar-nav' />

            <Navbar.Collapse id='responsive-navbar-nav'>

                <Nav className='me-auto'>

                    <Nav.Link href='#features' className='custom-white-text'>Features</Nav.Link>

                    <Nav.Link href='#pricing' className='custom-white-text'>Pricing</Nav.Link>

                    <Nav.Link
                    href='https://eichhorn-personal.github.io/frodo-alpha/'
                    target='_blank'
                    className='custom-white-text me-5'
                    >
                
                        Frodo
                    
                    </Nav.Link>

                </Nav>

            </Navbar.Collapse>

            <Nav className='ml-auto me-5'>

                <LinkContainer to='/login'>

                    <Nav.Link onClick={handleShowLogin} className='custom-white-text'>Login</Nav.Link>

                </LinkContainer>

                <LinkContainer to='/signup'>

                    <Nav.Link onClick={handleShowSignUp} className='custom-white-text'>Sign Up</Nav.Link>

                </LinkContainer>

            </Nav>

        </Navbar>

    )

}
