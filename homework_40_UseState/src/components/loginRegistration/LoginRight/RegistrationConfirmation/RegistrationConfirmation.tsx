import * as React from 'react';
import { Link } from 'react-router-dom';
import './registrationConfirmation.css';



export function RegistrationConfirmation() {
  return (
    <div className='formContainer'>
        <div className='link'>
            <Link to="/backToHome">Back to home</Link>
        </div>
        <div className='confirmation'>
            <h1>Registration Confirmation</h1>
            
        </div>    
        <div className='activateWithEmail'>  
        <p>
            {`Please activate your account with the activation link in the email.`}
        </p>
        <p className='checkEmail'>Please, check your email</p>
        
        </div>
    </div>
  );
}