import * as React from 'react';

import ThemeSwitch from '../components/ThemeSwitch';

export default function Header() {

    return (

        <header className='w-100'>

            <div className='custom-section-size d-flex justify-content-between align-items-center py-2 mx-auto px-3 px-md-0'>

                <div className='h4 mb-0'>


                
                </div>

                <ThemeSwitch />

            </div>

        </header>
    
    )

}
