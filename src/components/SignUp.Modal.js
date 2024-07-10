// https://bootcamp.uxdesign.cc/build-react-login-sign-up-form-ui-with-bootstrap-5-7288c8ca15b7
// https://blog.logrocket.com/building-react-modal-module-with-react-router/

import React, {useEffect, useState} from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function SignUp({showSignUp, handleCloseSignUp, handleSubmitSignUp}) {

    const[firstName, setFirstName] = useState('');
    const[lastName, setLastName] = useState('');
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        handleSubmitSignUp({firstName, lastName, email, password});

        setFirstName('');
        setLastName('');
        setEmail('');
        setPassword('');

        handleCloseSignUp();
    }

    return (

        <Modal
            show={ showSignUp }
            onHide={ handleCloseSignUp }
            centered
            backdrop="static"
        >

            <Modal.Header>

                <Modal.Title>Sign up</Modal.Title>

            </Modal.Header>

            <Modal.Body>

                <Form onSubmit={ onSubmit }>

                    <Form.Group className='mb-3' controlId='formBasicFirstName'>

                        <Form.Label>First name</Form.Label>

                        <Form.Control
                            type='text'
                            placeholder='First name'
                            className='form-control'
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                        />

                    </Form.Group>

                    <Form.Group className='mb-3' controlId='formBasicLastName'>

                        <Form.Label>Last name</Form.Label>

                        <Form.Control
                            type='text'
                            placeholder='Last name'
                            className='form-control'
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                        />

                    </Form.Group>

                    <Form.Group className='mb-3' controlId='formBasicEmail'>

                        <Form.Label>Email address</Form.Label>

                        <Form.Control
                            type='email'
                            placeholder='Enter email'
                            className='form-control'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />

                    </Form.Group>

                    <Form.Group className='mb-3' controlId='formBasicPassword'>

                        <Form.Label>Password</Form.Label>

                        <Form.Control
                            type='password'
                            placeholder='Enter password'
                            className='form-control'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />

                    </Form.Group>

                    <div className='d-grid'>

                        <Button type='submit' className='btn btn-primary'>
                            Sign Up
                        </Button>

                    </div>

                    <p className='forgot-password text-right'>
                        Forogt <a href='#'>password?</a>
                    </p>

                </Form>

            </Modal.Body>

        </Modal>

    );
  
}
