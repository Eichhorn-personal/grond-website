import * as React from 'react';
import grondlogo from '../images/new.grond.ai.logo2.png';

export default function TitleSection() {
    return (
        <div
            id='section-title'
            className='title-section'
        >
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
            </div>
        </div>    
    );
}
