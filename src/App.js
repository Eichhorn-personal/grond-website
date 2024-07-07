import './css/app.css';

import Header from './components/Header';
import TitleSection from './components/TitleSection';
import FeaturesSection from './components/FeaturesSection';
import PricingSection from './components/PricingSection';
import Footer from './components/Footer';

export default function App() {
    
    return (
        
        <div className='App gradient-background-dark'>

                <Header />

                <TitleSection />

                <FeaturesSection />

                <PricingSection />

                <Footer />

        </div>
        
    );

}
