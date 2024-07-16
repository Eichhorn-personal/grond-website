import * as React from 'react';
import { Col, Card } from 'react-bootstrap';

function FeaturesSection() {
    return (
        <div id='FeaturesSection' className='w-75 py-2 mx-auto px-3 px-md-0 border-bottom'>

            <h1 className='mt-2 mb-4 gold-text'>Product Features</h1>

            <div className='features-grid mb-4'> {/* Use a div with the custom CSS class */}

                <Col>

                    <Card className='pt-2 ps-0 border-0'>

                        <div className='d-flex'>

                            <div className='p-2'>

                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    height="30"
                                    fill="currentColor"
                                    className="bi bi-1-circle"
                                    viewBox="0 0 16 16">
                                    <path d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M9.283 4.002V12H7.971V5.338h-.065L6.072 6.656V5.385l1.899-1.383z"/>
                                </svg>

                            </div>

                            <div className='p-2'>

                                <h4 className='mb-0'>Easy to use</h4>
                                <p>Fast, streamlined, and efficient</p>

                            </div>

                        </div>

                    </Card>

                </Col>

                <Col>
                    <Card className='pt-2 ps-0 border-0'>

                        <div className='d-flex'>

                            <div className='p-2'>

                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    height="30"
                                    fill="currentColor"
                                    className="bi bi-2-circle"
                                    viewBox="0 0 16 16">
                                    <path d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.646 6.24v.07H5.375v-.064c0-1.213.879-2.402 2.637-2.402 1.582 0 2.613.949 2.613 2.215 0 1.002-.6 1.667-1.287 2.43l-.096.107-1.974 2.22v.077h3.498V12H5.422v-.832l2.97-3.293c.434-.475.903-1.008.903-1.705 0-.744-.557-1.236-1.313-1.236-.843 0-1.336.615-1.336 1.306"/>  
                                </svg>
                            
                            </div>
                            
                            <div className='p-2'>
                            
                                <h4 className='mb-0'>Status Reports</h4>
                                <p>Visual Reporting that makes sense</p>
                            
                            </div>
                        
                        </div>

                    </Card>

                </Col>

                <Col>

                    <Card className='pt-2 ps-0 border-0'>

                        <div className='d-flex'>

                            <div className='p-2'>

                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    height="30"
                                    fill="currentColor"
                                    className="bi bi-3-circle"
                                    viewBox="0 0 16 16">
                                    <path d="M7.918 8.414h-.879V7.342h.838c.78 0 1.348-.522 1.342-1.237 0-.709-.563-1.195-1.348-1.195-.79 0-1.312.498-1.348 1.055H5.275c.036-1.137.95-2.115 2.625-2.121 1.594-.012 2.608.885 2.637 2.062.023 1.137-.885 1.776-1.482 1.875v.07c.703.07 1.71.64 1.734 1.917.024 1.459-1.277 2.396-2.93 2.396-1.705 0-2.707-.967-2.754-2.144H6.33c.059.597.68 1.06 1.541 1.066.973.006 1.6-.563 1.588-1.354-.006-.779-.621-1.318-1.541-1.318"/>
                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8"/>
                                </svg>

                            </div>

                            <div className='p-2'>

                                <h4 className='mb-0'>Business value</h4>
                                <p>Prioritize change quicker and provide value faster.</p>

                            </div>

                        </div>

                    </Card>

                </Col>

                <Col>

                    <Card className='pt-2 ps-0 border-0'>

                        <div className='d-flex'>

                            <div className='p-2'>

                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    height="30"
                                    fill="currentColor"
                                    className="bi bi-check2-circle"
                                    viewBox="0 0 16 16">
                                    <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z" />
                                    <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z" />
                                </svg>  

                            </div>

                            <div className='p-2'>

                                <h4 className='mb-0'>duis tristique</h4>
                                <p>tellus cras adipiscing enim eu turpis egestas pretium aenean pharetra magna ac placerat vestibulum lectus</p>

                            </div>

                        </div>

                    </Card>

                </Col>

                <Col>

                    <Card className='pt-2 ps-0 border-0'>

                        <div className='d-flex'>

                            <div className='p-2'>

                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    height="30"
                                    fill="currentColor"
                                    className="bi bi-question-circle"
                                    viewBox="0 0 16 16">
                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                                    <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286m1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94"/>
                                </svg>

                            </div>

                            <div className='p-2'>

                                <h4 className='mb-0'>mattis molestie a</h4>
                                <p>tellus in hac habitasse platea dictumst vestibulum rhoncus est pellentesque</p>

                            </div>

                        </div>

                    </Card>

                </Col>

                <Col>

                    <Card className='pt-2 ps-0 border-0'>

                        <div className='d-flex'>

                            <div className='p-2'>

                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    height="30"
                                    fill="currentColor"
                                    className="bi bi-info-circle"
                                    viewBox="0 0 16 16">
                                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                                        <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>                            
                                </svg>  


                            </div>

                            <div className='p-2'>

                                <h4 className='mb-0'>facilisis magna</h4>
                                <p>blandit aliquam etiam erat velit scelerisque in dictum</p>

                            </div>

                        </div>

                    </Card>

                </Col>

            </div>

        </div>
    );
}

export default FeaturesSection;
