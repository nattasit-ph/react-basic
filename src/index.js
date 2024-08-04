import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import About from './basic/About';
import Contact from './basic/Contact';
import reportWebVitals from './reportWebVitals';
import ServiceClassComponent from './basic/ServiceClassComponent';
import ServiceFunctionalComponent from './basic/ServiceFunctionalComponent';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
  <StrictMode>
    <App />
    {/* <About /> */}
    {/* <Contact /> */}
    {/* <ServiceClassComponent /> */}
    {/* <ServiceFunctionalComponent /> */}

  </StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
