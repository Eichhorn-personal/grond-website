import React, {useState} from 'react';

import { useNavigate } from 'react-router-dom';

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function Login({show, handleClose, handleSubmit}) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const navigate = useNavigate();

    const onSubmit = (e) => {
        e.preventDefault();
        handleSubmit({email, password, rememberMe});
        handleClose();
        navigate('/');
    }

    return (

        <Modal 
            show={show}
            onHide={handleClose}
            centered
            backdrop="static"
        >

            <Modal.Header>

                <Modal.Title>Sign In</Modal.Title>

            </Modal.Header>  

            <Modal.Body>

                <Form onSubmit={onSubmit}>

                    <Form.Group className='mb-3' controlId='formBasicEmail'>

                        <Form.Label>Email address</Form.Label>

                        <Form.Control
                            type='email'
                            placeholder='Enter email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />

                    </Form.Group>

                    <Form.Group className='mb-3' controlId='formBasicPassword'>

                        <Form.Label>Password</Form.Label>

                        <Form.Control
                            type='password'
                            placeholder='Enter password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />

                    </Form.Group>

                    <Form.Group className='mb-3' controlId='formBasicCheckbox'>

                        <Form.Check
                            type='checkbox'
                            label='Remember me'
                            checked={rememberMe}
                            onChange={(e) => setRememberMe(e.target.checked)}
                        />

                    </Form.Group>

                    <div className='d-grid'>

                        <Button variant='primary' type='submit'>
                            Submit
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