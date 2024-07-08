import React, {useState} from 'react';

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import Header from './components/Header';
import TitleSection from './components/TitleSection';
import FeaturesSection from './components/FeaturesSection';
import PricingSection from './components/PricingSection';
import Footer from './components/Footer';

import Login from './components/Login.Component.js';
import SignUp from './components/Signup.Component.js';

import 'bootstrap/dist/css/bootstrap.min.css';
import './css/app.css';

export default function App() {

    const [showLogin, setShowLogin] = useState(false);

    const handleLoginSubmit = ({email, password, rememberMe}) => {
        // Handle the login logic here
        console.log('Email: ', email);
        console.log('Password: ', password);
        console.log('Remember Me: ', rememberMe);
        setShowLogin(false);
    };
    
    const handleShowLogin = () => {
        setShowLogin(true);
    };

    const handleClose = () => {
        // Handle closing logic here
        console.log('handleClose called');
        setShowLogin(false);
    };

    return (
        
        <div className='App gradient-background-dark'>

            <Router>           

                <Header handleShowLogin={handleShowLogin} />

                <Routes>

                    <Route path='/' element= {
                       
                        <>

                            <TitleSection />

                            <FeaturesSection />

                            <PricingSection />

                        </>

                    } />

                    <Route path='/login' element={<Login show={showLogin} handleSubmit={handleLoginSubmit} handleClose={handleClose} />} />
                    
                    <Route path='/signup' element={<SignUp />} />

                </Routes>

            </Router>

            <Footer />

        </div>
        
    );

}
