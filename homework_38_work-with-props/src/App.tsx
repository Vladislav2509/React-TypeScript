import * as React from 'react';
import { LoginRegistration } from './components/inputs/loginRegistration/LoginRegistration';
import { RegistrationConfirmation } from './components/inputs/RegistrationConfirmation4/RegistrationConfirmation';

function App() {
    return (

      <div>
        <LoginRegistration login='Login' registration='Registration' email='Email' 
        password ='Password' forgot='Forgot your password?' reset='Reset password'
        />
      
        <RegistrationConfirmation registration2='Registration Confirmation' 
        activate_account='Please activate your account with the activation link in the email' 
        gmail='test@gmail.com' check='Please, check your email' home_button='Home'
        /> 
      </div>
      
    );
  }
  
  export default App;