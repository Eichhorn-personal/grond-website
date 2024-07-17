import * as React from 'react';

import '../css/pricing.section.css';

export default function PricingSection() {

    return (

        <div id='pricing' className='pricing-section'>
            <div className='pricing-title'>
                <h1 className='gold-text'>Pricing Information</h1>
            </div>
            <div className='pricing-grid'>

                <div className='pricing-card-flex'>
                    <div className='pricing-card-title bronze-plan'>
                        Bronze Plan
                    </div>
                    <div className='pricing-cost'>
                        $0<small>/mo</small>
                    </div>
                    <div className='pricing-details'>
                        <ul>
                            <li>10 Concurrent Users</li>
                            <li>100 Tickets Per Day</li>
                            <li>100 Escalations Per Day</li>
                            <li>Unlimited App Usage</li>
                        </ul>
                    </div>
                    <button className='pricing-button'>
                        Sign up for free
                    </button>
                </div>

                <div className='pricing-card-flex'>
                    <div className='pricing-card-title bronze-plan'>
                        Bronze Plan
                    </div>
                    <div className='pricing-cost'>
                        $0<small>/mo</small>
                    </div>
                    <div className='pricing-details'>
                        <ul>
                            <li>10 Concurrent Users</li>
                            <li>100 Tickets Per Day</li>
                            <li>100 Escalations Per Day</li>
                            <li>Unlimited App Usage</li>
                        </ul>
                    </div>
                    <button className='pricing-button'>
                        Sign up for free
                    </button>
                </div>

                <div className='pricing-card-flex'>
                    <div className='pricing-card-title bronze-plan'>
                        Bronze Plan
                    </div>
                    <div className='pricing-cost'>
                        $0<small>/mo</small>
                    </div>
                    <div className='pricing-details'>
                        <ul>
                            <li>10 Concurrent Users</li>
                            <li>100 Tickets Per Day</li>
                            <li>100 Escalations Per Day</li>
                            <li>Unlimited App Usage</li>
                        </ul>
                    </div>
                    <button className='pricing-button'>
                        Sign up for free
                    </button>
                </div>
                    


            </div>
        </div>
    );
}
