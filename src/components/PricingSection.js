import * as React from 'react';
import { Row, Card, Button } from 'react-bootstrap';

function PricingSection() {

    return (

        <div id='PricingSection' className='custom-section-size py-2 mx-auto px-3 px-md-0 border-bottom'>

            <h1 className='custom-section-title-text mt-2 mb-4'>Pricing Information</h1>

            <Row className='row-cols-1 row-cols-md-3 g-4 custom-row'>

                <Card bg='light' text='dark' className='custom-card-style gradient-background-bronze me-md-4'>

                    <Card.Header style={{backgroundColor: "#CD7F32", color: "white"}}>
                    
                        Bronze Plan

                    </Card.Header>

                    <Card.Body className='custom-card-body'>

                        <div className='custom-card-content'>

                            <Card.Title><h2>$0<small className='text-muted'>/mo</small></h2></Card.Title>

                            <ul className="list-unstyled mt-3 mb-4">
                                <li>10 Concurrent Users</li>
                                <li>100 Tickets Per Day</li>
                                <li>100 Escalations Per Day</li>
                                <li>Unlimited App Usage</li>
                            </ul>

                        </div>

                        <div className='custom-card-button-container'>

                            <Button variant='btn btn-light' className='custom-card-button-style'>Sign up for free</Button>
                        
                        </div>

                    </Card.Body>

                </Card>

                <Card bg='light' text='dark' className='custom-card-style gradient-background-silver me-md-4'>

                    <Card.Header style={{backgroundColor: "#C0C0C0", color: "black"}}>

                        Silver Plan

                    </Card.Header>

                    <Card.Body className='custom-card-body'>

                        <div className='custom-card-content'>

                            <Card.Title><h2>$99<small className='text-muted'>/mo</small></h2></Card.Title>

                            <ul className="list-unstyled mt-3 mb-4">
                                <li>100 Concurrent Users</li>
                                <li>Unlimited Tickets</li>
                                <li>Unlimited Escalations</li>
                                <li>Unlimited App Usage</li>
                            </ul>

                        </div>

                        <div className='custom-card-button-container'>

                            <Button type="button" className="btn btn-dark custom-card-button-style">Get started</Button>

                        </div>

                    </Card.Body>

                </Card>

                <Card bg='light' text='dark' className='custom-card-style gradient-background-gold mb-4'>

                    <Card.Header style={{backgroundColor: "#D4AF37", color: "black"}}>

                        Gold Plan

                    </Card.Header>

                    <Card.Body className='custom-card-body'>

                        <div className='custom-card-content'>

                            <Card.Title><h2>$299<small className='text-muted'>/mo</small></h2></Card.Title>

                            <ul className="list-unstyled mt-3 mb-4">
                                <li>Unlimited Users</li>
                                <li>Priority Support</li>
                                <li>Unlimited Tickets & Escalations</li>
                                <li>Unlimited App Usage</li>
                            </ul>

                        </div>

                        <div className='custom-card-button-container'>

                            <Button type="button" className="btn btn-dark custom-card-button-style">Contact us</Button>

                        </div>

                    </Card.Body>

                </Card>

            </Row>

        </div>
        
    );


}

export default PricingSection;
