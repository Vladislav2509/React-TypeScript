import React from 'react';
import ReactDOM from 'react-dom/client';
// =======================================================================
import './components/inputs/mainPage/MainPageStyle.css';
import './components/inputs/hamburger/HamburgerStyle.css';
// =======================================================================
import Hamburger from './components/inputs/hamburger/Hamburger';
import MainPage from './components/inputs/mainPage/MainPage';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Hamburger />
    <MainPage />
  </React.StrictMode>
);



