import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// ============================================================================================
import './components/inputs/postCard/PostCardStyle.css';
import './components/inputs/PostLists2/PostListsStyle.css';
import './components/inputs/loginRegistration/LoginRegistrationStyle.css';
import './components/inputs/RegistrationConfirmation4/RegistrationConfirmationStyle.css';
// ============================================================================================
import PostLists from './components/inputs/PostLists2/PostLists';
// ============================================================================================
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
    <PostLists />
  </React.StrictMode>
);


