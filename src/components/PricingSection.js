import * as React from 'react';

import '../css/pricingsection.css';

function PricingSection() {

    return (

        <div id='PricingSection' className='custom-pricing-section-container'>

            <h1 className='custom-pricing-title'>Pricing Information</h1>

            <div className='custom-pricing-flexbox'>

                <div className='custom-pricing-card card w-300px p-2 mb-4'>

                    <h4 className='card-header' style={{backgroundColor: "#CD7F32"}}>
                        Bronze Plan
                    </h4>

                    <h1 class="card-title pricing-card-title">$0<small class="text-body-secondary fw-light">/mo</small></h1>

                    <ul class="list-unstyled mt-3 mb-4">
                        <li>10 Concurrent Users</li>
                        <li>100 Tickets Per Day</li>
                        <li>100 Escalations Per Day</li>
                        <li>Unlimited App Usage</li>
                    </ul>

                    <button type="button" class="btn btn-md btn-outline-dark">Sign up for free</button>

                </div>

                <div className='custom-pricing-card card w-300px p-2 mb-4'>

                    <h4 className='card-header' style={{backgroundColor: "#C0C0C0"}}>
                        Silver Plan
                    </h4>

                    <h1 class="card-title pricing-card-title">$99<small class="text-body-secondary fw-light">/mo</small></h1>

                    <ul class="list-unstyled mt-3 mb-4">
                        <li>100 Concurrent Users</li>
                        <li>Unlimited Tickets</li>
                        <li>Unlimited Escalations</li>
                        <li>Unlimited App Usage</li>
                    </ul>

                    <button type="button" class="btn btn-md btn-dark">Get started</button>

                </div>

                <div className='custom-pricing-card card w-300px p-2 mb-4'>

                    <h4 className='card-header' style={{backgroundColor: "#D4AF37"}}>
                        Gold Plan
                    </h4>

                    <h1 class="card-title pricing-card-title">$299<small class="text-body-secondary fw-light">/mo</small></h1>

                    <ul class="list-unstyled mt-3 mb-4">
                        <li>Unlimited Users</li>
                        <li>Priority Support</li>
                        <li>Unlimited Tickets & Escalations</li>
                        <li>Unlimited App Usage</li>
                    </ul>

                    <button type="button" class="btn btn-md btn-dark">Contact us</button>

                </div>

            </div>

        </div>
        
    );


}

export default PricingSection;
