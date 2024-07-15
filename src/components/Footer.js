import React from "react";

import '../css/footer.css';

export default function Footer() {
    const year = new Date().getFullYear();
    
    return(
        <footer className='footer'>
            <div className='copyright'>
                © {year} grond.ai. All rights reserved.
            </div>
        </footer>
    );
}

