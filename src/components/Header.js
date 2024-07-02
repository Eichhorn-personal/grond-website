import * as React from 'react';

import ThemeSwitch from '../components/ThemeSwitch';

export default function Header() {

    return (

        <header className='w-100'>

            <div className='d-flex justify-content-between align-items-center py-2 mx-auto px-3 px-md-0'>

                <p className='mb-0 ms-5 fs-6'>

                    grond.ai

                
                </p>
                
                {/*  Disabling themeing until needed    */}
                {/*  <ThemeSwitch />                    */}

            </div>

        </header>
    
    )

}
