import React, {useState} from 'react';

import Frodo from '../images/frodo.png';

export default function Header({handleShowLogin, handleShowSignUp}) {
    const [menuActive, setMenuActive] = useState(false);
    const toggleMenu = () => { setMenuActive(!menuActive);};
    return (
        <header id='header' className={`navbar $(menuActive ? 'menu-active' : ''}`}>
            <div className='container d-flex w-100 px-1'>
                <button className='menu-toggle' onClick={toggleMenu}>
                        &#9776;
                </button>
                <div className='navbar-brand mb-0 fs-6 text-start text-light'>
                    <a href="#home">grond.ai</a>
                </div>
                <div className={`nav-left ${menuActive ? 'show' : ''}`}>
                    <a href='#features' className='nav-link fs-6 text-light'>
                        Features
                    </a>
                    <a href='#pricing' className='nav-link fs-6 text-light'>
                        Pricing
                    </a>
                    <a href='https://eichhorn-personal.github.io/frodo-alpha/' target='_blank' className='nav-link text-light'>
                        <img alt='' src={Frodo} width='30' className='d-inline-block align-center'/>
                        <span className='ms-1'>Frodo</span>
                    </a>
                </div> 
                <div className={`nav-right ${menuActive ? 'show' : ''}`}>
                    <a onClick={handleShowLogin} className='nav-link fs-6 text-light'>
                        Login   
                    </a>
                    <a onClick={handleShowSignUp} className='nav-link fs-6 text-light'>
                        Sign Up
                    </a>
                </div>
            </div>
        </header>
    );
}
