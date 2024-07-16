import * as React from 'react';

import '../css/title.section.css';

import grondlogo from '../images/new.grond.ai.logo2.png';
import Frodo from '../images/frodo.png';

export default function TitleSection() {
    const handleLaunchGrond = () => {
        window.open('https://eichhorn-personal.github.io/frodo-alpha/', '_blank');
    };

    return (
        <div className='title-section'>
            <div className='image-container'>
                <img
                    className='grond-logo'
                    src={grondlogo}
                    alt='grond.ai company logo'
                    loading='lazy'
                />
            </div>
            <div className='text-container'>
                <h1 className='gold-text'>grond.ai</h1>
                <p>
                    Reimagine how you prioritze and handle process change 
                    in your software design lifecycle. Make critical change 
                    quicker and deliver the value your consumers want faster.
                </p>
                <button className='launch-grond' onClick={handleLaunchGrond}>
                    <img className='app-icon' alt='' src={Frodo}/> 
                    Launch Frodo
                </button>
               
            </div>
        </div>    
    );
}
