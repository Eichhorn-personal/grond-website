import React from 'react';
import Header from './components/Header.js';
import TitleSection from './components/TitleSection.js';
import FeaturesSection from './components/FeaturesSection.js';
import Footer from './components/Footer.js';

import './css/app.css';

export default function App() {
    return (
        <div id='grond-react-app' className='App'>
            <div id='website-container' className='container'>
                <Header /> 
                <TitleSection />
                <FeaturesSection />
                <Footer />
            </div>
        </div>
    );
}