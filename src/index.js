import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import './components/assets/css/main.css';

import './components/assets/vendor/bootstrap/css/bootstrap.min.css';
import './components/assets/vendor/bootstrap-icons/bootstrap-icons.css';
import './components/assets/vendor/glightbox/css/glightbox.min.css';
import './components/assets/vendor/swiper/swiper-bundle.min.css';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


reportWebVitals();
