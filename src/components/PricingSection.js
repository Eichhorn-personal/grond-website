import * as React from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap';

export default function PricingSection() {

    return (

        <div id='PricingSection' className='w-75 py-2 mx-auto px-3 px-md-0 border-bottom'>

            <h1 id='pricing' className='mt-2 mb-4 gold-text'>Pricing Information</h1>

            <Row className='justify-content-center mb-4'>

                <Col xs={12} md={4} className='custom-col'>

                    <Card className='d-flex flex-column'>

                        <Card.Header style={{backgroundColor: "#CD7F32", color: "white"}}>
                        
                            Bronze Plan

                        </Card.Header>

                        <Card.Body className='d-flex flex-column'>

                            <div>

                                <Card.Title><h2>$0<small className='text-muted'>/mo</small></h2></Card.Title>

                                <ul className="list-unstyled mt-3 mb-4">
                                    <li>10 Concurrent Users</li>
                                    <li>100 Tickets Per Day</li>
                                    <li>100 Escalations Per Day</li>
                                    <li>Unlimited App Usage</li>
                                </ul>

                            </div>

                                <Button type="button" className='mt-auto w-100'>Sign up for free</Button>
                            
                        </Card.Body>

                    </Card>

                </Col>

                <Col xs={12} md={4} className='custom-col'>

                    <Card className='d-flex flex-column'>

                        <Card.Header style={{backgroundColor: "#C0C0C0", color: "black"}}>

                            Silver Plan

                        </Card.Header>

                        <Card.Body className='d-flex flex-column'>

                            <div>

                                <Card.Title><h2>$99<small className='text-muted'>/mo</small></h2></Card.Title>

                                <ul className="list-unstyled mt-3 mb-4">
                                    <li>100 Concurrent Users</li>
                                    <li>Unlimited Tickets</li>
                                    <li>Unlimited Escalations</li>
                                    <li>Unlimited App Usage</li>
                                </ul>

                            </div>

                                <Button type="button" className="btn btn-dark mt-auto w-100">Get started</Button>

                        </Card.Body>

                    </Card>

                </Col>

                <Col xs={12} md={4} className='custom-col'>

                    <Card className='d-flex flex-column'>

                        <Card.Header style={{backgroundColor: "#D4AF37", color: "black"}}>

                            Gold Plan

                        </Card.Header>

                        <Card.Body className='d-flex flex-column'>

                            <div>

                                <Card.Title><h2>$299<small className='text-muted'>/mo</small></h2></Card.Title>

                                <ul className="list-unstyled mt-3 mb-4">
                                    <li>Unlimited Users</li>
                                    <li>Priority Support</li>
                                    <li>Unlimited Tickets & Escalations</li>
                                    <li>Unlimited App Usage</li>
                                </ul>

                            </div>

                                <Button type="button" className="btn btn-dark mt-auto w-100">Contact us</Button>

                        </Card.Body>

                    </Card>

                </Col>

            </Row>

        </div>
        
    );

}
