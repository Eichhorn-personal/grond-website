import * as React from 'react';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import '../css/app.css';

export default function Header() {

    return (


            <Navbar collapseOnSelect expand='lg' className='w-100 custom-white-text'>
                            
                <Navbar.Brand href="#home" className='mb-0 ms-5 fs-6 text-start custom-white-text'>grond.ai</Navbar.Brand>

                <Navbar.Toggle aria-controls='responsive-navbar-nav' />

                <Navbar.Collapse id='responsive-navbar-nav'>

                    <Nav className='me-auto'>

                        <Nav.Link href='#features' className='custom-white-text'>Features</Nav.Link>

                        <Nav.Link href='#pricing' className='custom-white-text'>Pricing</Nav.Link>

                    </Nav>

                </Navbar.Collapse>

                <Nav.Link
                    href='https://eichhorn-personal.github.io/frodo-alpha/'
                    target='_blank'
                    className='custom-white-text me-5'
                >
                
                Frodo
                
                </Nav.Link>

            </Navbar>

    )

}
