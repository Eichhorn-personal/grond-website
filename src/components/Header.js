import React from 'react';

import Frodo from '../images/frodo.png';

export default function Header({handleShowLogin, handleShowSignUp}) {
    return (
        <header id='header' className='navbar w-100 bg-transparent align-items-center'>
            <div className='container d-flex justify-content-between align-items-center w-100 px-5'>
                <div className='d-flex align-items-center'>
                    <div className='navbar-brand mb-0 ms-5 fs-6 text-start text-light'>
                        <a href="#home">grond.ai</a>
                    </div>
                    <div className='nav-left d-flex align-items-center ms-4'>
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
                </div>
                <div className='nav-right d-flex align-items-center'>
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
