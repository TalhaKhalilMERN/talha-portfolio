// components/Header.js
import React,{useRef, useEffect} from 'react';
import { Link } from 'react-router-dom';
import heroImage from "./assets/img/hero-img.jpg";
import styles from './assets/css/main.module.css';
import Typed from 'typed.js';

function Hero() {

  const TypedText = () => {
    const typedRef = useRef(null);
  
    useEffect(() => {
      const options = {
        strings: [
          'Frontend Developer',
          'Backend Developer',
          'MERN Stack Developer',
          'Freelancer'
        ],
        typeSpeed: 100,
        backSpeed: 50,
        loop: true,
      };
  
      const typed = new Typed(typedRef.current, options);
  
      return () => {
        typed.destroy(); // Clean up the animation on component unmount
      };
    }, []);
  
    return (
      <p>
        <span ref={typedRef} className={styles.typed}></span>
      </p>
    );
  };

  return (
    <section id="hero" className={`${styles.hero} ${styles.section}  ${styles['dark-background']}`}>
      <img src={heroImage} alt="Image-background" />

      <div className={`${styles.container} container d-flex flex-column align-items-center justify-content-center text-center`} data-aos-delay="100">
        <h2>I am Talha Khalil</h2>
        <TypedText/>
        {/* <p><span className={styles.typed} data-typed-items="Frontend Developer, Backend Developer, Full Stack Web Developer, Freelancer"></span></p> */}
      </div>
    </section>
  );
}

export default Hero;


{/* <section id="hero" className="hero section dark-background">

<img src={heroImage} alt="" data-aos="fade-in"/>

<div className="container d-flex flex-column align-items-center justify-content-center text-center" data-aos="fade-up" data-aos-delay="100">
  <h2>I am Talha Khalil</h2>
  <p><span className="typed" data-typed-items="Frontend Developer,Backend Developer, Full Stack Web Developer, Freelancer"></span></p>
</div>

</section> */}