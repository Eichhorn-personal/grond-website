import * as React from 'react';
import { Row, Card, Button } from 'react-bootstrap';

function PricingSection() {

    return (

        <div id='PricingSection' className='custom-section-size py-2 mx-auto px-3 px-md-0'>

            <h1 className='text-left'>Pricing Information</h1>

            <Row className='custom-card-container-style'>

                <Card bg='light' text='dark' className='custom-card-style'>

                    <Card.Header style={{backgroundColor: "#CD7F32", color: "white"}}>
                    
                        Bronze Plan

                    </Card.Header>

                    <Card.Body>

                        <Card.Title><h2>$0<small className='text-muted'>/mo</small></h2></Card.Title>

                        <ul class="list-unstyled mt-3 mb-4">
                            <li>10 Concurrent Users</li>
                            <li>100 Tickets Per Day</li>
                            <li>100 Escalations Per Day</li>
                            <li>Unlimited App Usage</li>
                        </ul>

                        <Button variant='outline-dark' className='custom-card-button-style'>Sign up for free</Button>

                    </Card.Body>


                </Card>

                <Card bg='light' text='dark' className='custom-card-style'>

                    <Card.Header style={{backgroundColor: "#C0C0C0", color: "black"}}>

                        Silver Plan

                    </Card.Header>

                    <Card.Body>

                        <Card.Title><h2>$99<small className='text-muted'>/mo</small></h2></Card.Title>

                        <ul class="list-unstyled mt-3 mb-4">
                            <li>100 Concurrent Users</li>
                            <li>Unlimited Tickets</li>
                            <li>Unlimited Escalations</li>
                            <li>Unlimited App Usage</li>
                        </ul>

                        <button type="button" class="btn btn-dark custom-card-button-style">Get started</button>

                    </Card.Body>

                </Card>

                <Card bg='light' text='dark' className='custom-card-style'>

                    <Card.Header style={{backgroundColor: "#D4AF37", color: "black"}}>

                        Gold Plan

                    </Card.Header>

                    <Card.Body>

                        <Card.Title><h2>$299<small className='text-muted'>/mo</small></h2></Card.Title>

                        <ul class="list-unstyled mt-3 mb-4">
                            <li>Unlimited Users</li>
                            <li>Priority Support</li>
                            <li>Unlimited Tickets & Escalations</li>
                            <li>Unlimited App Usage</li>
                        </ul>

                        <button type="button" class="btn btn-dark custom-card-button-style">Contact us</button>

                    </Card.Body>

                </Card>

            </Row>

        </div>
        
    );


}

export default PricingSection;
