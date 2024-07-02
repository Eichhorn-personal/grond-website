import * as React from 'react';
import { Col, Row } from 'react-bootstrap';

import grondlogo from '../images/grond.ai.png';

function TitleSection() {

    return (

        <div id='TitleSection' className='custom-section-size py-2 mx-auto px-3 px-md-0 border-bottom'>

            <Row>

                <Col className='md-6'>
                
                    <h1 className='custom-section-title-text mt-2 mb-4'>grond.ai</h1>

                    <p className=''>
                        Reimagine how you prioritze and handle process change 
                        in your software design lifecycle. Make critical change 
                        quicker and deliver the value your consumers want faster.
                    </p>

                </Col>

                <Col className='md-6 d-flex justify-content-center align-items-center mb-4'>

                    <img
                        src={grondlogo}
                        alt='grond.ai company logo'
                        height='300'
                        loading='lazy'
                    />

                </Col>

            </Row>
            
        </div>    
       
    );

}

export default TitleSection;
