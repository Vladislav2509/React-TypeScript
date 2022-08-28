import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './components/inputs/LoginRegistration/LoginRegistrationStyle.css'
import './components/inputs/success/SuccessStyle.css'


import LoginRegistration from './components/inputs/LoginRegistration/LoginRegistration';
import Success from './components/inputs/success/Success';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <LoginRegistration />
    <Success />
  </React.StrictMode>
);


