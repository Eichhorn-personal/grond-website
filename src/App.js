import React from 'react';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import './css/app.css';

export default function App() {
    return (
        <div className='App'>
            <Header/> 
            <Footer />
        </div>
    );
}