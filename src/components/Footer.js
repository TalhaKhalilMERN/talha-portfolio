import React,{useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import styles from './assets/css/main.module.css';

function Footer() {
 
  return (
      <footer id="footer" className={`${styles.footer} ${styles['accent-background']}`}>

      <div className="container">
        <div className={`${styles.copyright} text-center`}>
          <p>© <span>Copyright</span> <strong className="px-1 sitename">DevMERN</strong> <span>All Rights Reserved</span></p>
        </div>
        <div className={`${styles['social-links']} d-flex justify-content-center`}>
               <a href="https://www.facebook.com/share/sRoQaog92N8CyCPq/?mibextid=qi2Omg" target="_blank"><i className="bi bi-facebook"></i></a>
               <a href="https://www.instagram.com/talhakhalil68?igsh=eDNsbm9wMmE3cmt2" target="_blank"><i className="bi bi-instagram"></i></a>
               <a href="https://www.linkedin.com/in/talha-khalil-9415b02a4?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank"><i className="bi bi-linkedin"></i></a>
     
        </div>
        <div className={styles.credits}>
          Designed with &#10084; by <a href="https://bootstrapmade.com/">Talha Khalil</a>
        </div>
      </div>

    </footer>


  );
}

export default Footer;
