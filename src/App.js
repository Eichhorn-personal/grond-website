import React, {useState} from 'react';

import Header from './components/Header.js';
import TitleSection from './components/TitleSection.js';
import FeaturesSection from './components/FeaturesSection.js';
import PricingSection from './components/PricingSection.js';
import Footer from './components/Footer.js';

import SignUp from './components/SignUp.Modal.js';
import Login from './components/Login.Modal.js';

// import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/custom.scss';

export default function App() {

    const [showSignUp, setShowSignUp] = useState(false);
    const [showLogin, setShowLogin] = useState(false);


    const handleShowSignUp = () => { setShowSignUp(true); };
    const handleCloseSignUp = () => { setShowSignUp(false); };

    const handleShowLogin = () => { setShowLogin(true); };
    const handleCloseLogin = () => { setShowLogin(false); };

    const handleSubmitSignUp = ({firstName, lastName, email, password}) => {
        // Handle the signup logic here
        console.log('Handling signup:', { firstName, lastName, email, password });
        setShowSignUp(false);
    };

    const handleSubmitLogin = ({email, password, rememberMe}) => {
        // Handle the login logic here
        console.log('Handling login:', { email, password, rememberMe });
        setShowLogin(false);
    };

    return (

        <div className='App bg-dark text-light gradient-background-dark'>

            <Header handleShowSignUp={handleShowSignUp} handleShowLogin={handleShowLogin}/> 
            
            <TitleSection />

            <FeaturesSection />

            <PricingSection />

            <Footer />

            <SignUp 
                showSignUp={showSignUp} 
                handleCloseSignUp={handleCloseSignUp} 
                handleSubmitSignUp={handleSubmitSignUp} 
            />

            <Login
                showLogin={showLogin}
                handleCloseLogin={handleCloseLogin}
                handleSubmitLogin={handleSubmitLogin}
            />

        </div>

    );

}