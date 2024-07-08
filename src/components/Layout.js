import React from 'react';
import Header from './Header.js';
import TitleSection from './TitleSection.js';
import FeaturesSection from './FeaturesSection.js';
import PricingSection from './PricingSection.js';
import Footer from './Footer.js';

export default function Layout({ children, handleShowLogin, handleShowSignUp }) {

    return (

        <div className='App gradient-background-dark'>

            <Header handleShowLogin={ handleShowLogin } handleShowSignUp={handleShowSignUp} />

            <TitleSection />

            <FeaturesSection />

            <PricingSection />

            {children}

            <Footer />

        </div>
    );
};