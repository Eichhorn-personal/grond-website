import React, {useState} from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Layout from './components/Layout.js';
import Login from './components/Login.Component.js';
import SignUp from './components/Signup.Component.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/app.css';

function App() {
    const [showLogin, setShowLogin] = useState(false);
    const [showSignUp, setShowSignUp] = useState(false);

    const handleSubmitSignUp = ({firstName, lastName, email, password}) => {
        // Handle the signup logic here
        console.log('First name: ', firstName);
        console.log('Last name: ', lastName);
        console.log('Email: ', email);
        console.log('Password: ', password);
        setShowSignUp(false);
    }

    const handleSubmitLogin = ({email, password, rememberMe}) => {
        // Handle the login logic here
        console.log('Email: ', email);
        console.log('Password: ', password);
        console.log('Remember Me: ', rememberMe);
        setShowLogin(false);
    };
    
    const handleShowLogin = () => {
        setShowLogin(true);
    };

    const handleCloseLogin = () => {
        // Handle closing logic here
        setShowLogin(false);
    };

    const handleShowSignUp = () => {
        setShowSignUp(true);
    };

    const handleCloseSignUp = () => {
        // Handle closing logic here
        setShowSignUp(false);
    };

    return (

        <>
            <Layout handleShowLogin={handleShowLogin} handleShowSignUp={handleShowSignUp} />
            
            {showLogin && (
                <Login handleSubmitLogin={handleSubmitLogin} handleCloseLogin={handleCloseLogin} />
            )}

            {showSignUp && (
                <SignUp handleSubmitSignUp={handleSubmitSignUp} handleCloseSignUp={handleCloseSignUp} />
            )}


            <Routes>
                <Route path="/" element={<Layout handleShowLogin={handleShowLogin} handleShowSignUp={handleShowSignUp} />} />
                <Route path='/login' element={<Login showLogin={showLogin} handleSubmitLogin={handleSubmitLogin} handleCloseLogin={handleCloseLogin} />} />
                <Route path='/signup' element={<SignUp showSignUp={showSignUp} handleSubmitSignUp={handleSubmitSignUp} handleCloseSignUp={handleCloseSignUp} />} />
            </Routes>
        </>
    );

}

export default function AppWrapper() {

    return (

        <Router>
            <Routes>

            <Route path='*' element={<App />} />

            </Routes>
        </Router>
    );
}