import {React, useState, useEffect} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Resume from './components/Resume';
import Services from './components/Services';
import Stats from './components/Stats';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import styles from "./components/assets/css/main.module.css"

import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Function to handle scroll event and toggle visibility
    const toggleVisibility = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Scroll to top when button is clicked
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    };

    // Add event listeners
    window.addEventListener('scroll', toggleVisibility);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);


 
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <Router>
      <Header />
      <main>
        <Hero />
        <About />
        <Resume />
        <Services />
        <Stats />
        <Pricing />
        {/* <Testimonials /> */}
        <Contact />
      </main>
      <Footer />
      <div> <a
          href="#"
          id="scroll-top"
          className={`${styles['scroll-top']} ${isVisible ? styles.active : ''} d-flex align-items-center justify-content-center`}
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({
              top: 0,
              behavior: 'smooth',
            });
          }}
        >
          <i className="bi bi-arrow-up-short"></i>
       </a>
    </div>
    </Router>
  );
}

export default App;