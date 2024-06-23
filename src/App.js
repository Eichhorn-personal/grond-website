import './scss/bootstrap.scss';
import './css/app.css';

import Header from './components/Header';
import TitleSection from './components/TitleSection';
import FeaturesSection from './components/FeaturesSection';
import PricingSection from './components/PricingSection';
import Footer from './components/Footer';

import { ThemeProvider } from './hooks/useThemeContext';

export default function App() {
    
    return (
        
        <div className='App'>

            <ThemeProvider>

                <Header />

                <TitleSection />

                <FeaturesSection />

                <PricingSection />

                <Footer />

            </ThemeProvider>

        </div>
        
    );

}
