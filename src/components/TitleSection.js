import '../css/titlesection.css';

import grondlogo from '../images/grond.ai.png';

function TitleSection() {

    return (

        <div id='TitleSection' className='title-gradient-background'>

            <div className='title-grid-container'>

                <h1 className='title-grid-item-tagline'>grond.ai</h1>
                
                <p className='title-grid-item-subtag'>
                    Reimagine how you prioritze and handle process change 
                    in your software design lifecycle. Make critical change 
                    quicker and deliver the value your consumers want faster.

                </p>
                
                <div className='title-grid-item-logo'>
                    <img
                        src={grondlogo}
                        alt='grond.ai company logo'
                        height='300'
                        loading='lazy'
                    />
                </div>
               



            </div>    

        </div>
        
    );

}

export default TitleSection;
