import React, { useState } from 'react';
import '../css/header.css';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="header">
            <div className="nav-container">
                <nav className={`nav-links ${isOpen ? 'open' : ''}`}>
                    <a href="#home">Home</a>
                    <a href="#about">About</a>
                    <a href="#services">Services</a>
                    <a href="#contact">Contact</a>
                </nav>
                <button className="nav-toggle" onClick={toggleMenu}>
                    ☰
                </button>
            </div>
        </header>
    );
}

