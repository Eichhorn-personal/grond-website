import React from 'react';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import Frodo from '../images/frodo.png';

export default function Header({handleShowLogin, handleShowSignUp}) {

    return (

        <Navbar collapseOnSelect expand='lg' className='w-100 bg-transparent align-items-center'>
                        
            <Navbar.Brand href="#home" className='mb-0 ms-5 fs-6 text-start text-light'>grond.ai</Navbar.Brand>

            <Navbar.Toggle aria-controls='responsive-navbar-nav' />

            <Navbar.Collapse id='responsive-navbar-nav'>

                <Nav className='me-auto align-items-center'>

                    <Nav.Link href='#features' className='fs-6 text-light'>Features</Nav.Link>
                    <Nav.Link href='#pricing' className='fs-6 text-light'>Pricing</Nav.Link>
                    <Nav.Link
                        href='https://eichhorn-personal.github.io/frodo-alpha/'
                        target='_blank'
                        className='text-light'
                        >

                        <img
                        alt=''
                        src={Frodo}
                        width='30'
                        className='d-inline-block align-center'
                        />{' '}
                            Frodo
                    </Nav.Link>

                </Nav>

            </Navbar.Collapse>

            <Nav className='ml-auto me-5 align-items-center'>

                <Nav.Link onClick={handleShowLogin} className='fs-6 text-light'>Login</Nav.Link>
                <Nav.Link onClick={handleShowSignUp} className='fs-6 text-light'>Sign Up</Nav.Link>

            </Nav>

        </Navbar>

    );

}
