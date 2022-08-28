import React from 'react';

import {Routes, Route } from 'react-router-dom';
import {NavBar} from './components/navBar/NavBar';
// import {LoginRegistration} from './components/loginRegistration/LoginRegistration';
// import {Sidebar} from './components/pageSidebar/Sidebar';
import {MainPage} from './components/mainPage/MainPage';
import {PostLists} from './components/PostLists/PostLists';
import {AddPost} from './components/postCard/AddPost/AddPost';


// ROUTES OF LOGIN_FIREBASE
// import HomePage from './components/loginRegistration/newLoginPages/HomePage';
// import LoginPage from './components/loginRegistration/newLoginPages/LoginPage';
// import RegisterPage from './components/loginRegistration/newLoginPages/RegisterPage';


import { Login } from './components/loginRegistration/LoginRight/Login/Login';
import { Registration  } from './components/loginRegistration/LoginRight/Registration/Registration';
import { RegistrationConfirmation } from './components/loginRegistration/LoginRight/RegistrationConfirmation/RegistrationConfirmation';
import { ProtectedRoute } from './components/ProtectedRoute/ProtectedRoute';
import { ResetPassword } from './components/loginRegistration/LoginRight/reset-password/reset-password';




export const App = () => {
    return (
    <Routes>
        <Route path="/" element={<NavBar />}>
      
            <Route path="/all_post" element={
                <ProtectedRoute>
                    <PostLists />
                </ProtectedRoute>
                }>
            </Route>

            <Route path="/home" element={<MainPage />}/>
        
            {/* <Route path="/all_post" element={<PostLists />}/> */}

            <Route path="/add_post" element={
                <ProtectedRoute>
                    <AddPost />
                </ProtectedRoute>
                }>
            </Route>

            <Route path="/user" element={<Login />}/>

            <Route path="/Login" element={<Login />}/>

            <Route path="/registration" element={<Registration />}></Route>

            {/* <Route path="/SignInInput" element={<MainPage />}></Route> */}

            <Route path="/registrationConfirmation" element={<RegistrationConfirmation/>}></Route>

            <Route path="/backToHome" element={<MainPage/>}></Route>

            <Route path="/reset_password" element={<ResetPassword />}></Route>
        
        

            {/* LOGIN_FIREBASE */}
            {/* <Route path="/user" element={<LoginPage />} />

            <Route path="/login" element={<LoginPage />} />
            
            <Route path="/register" element={<RegisterPage />} /> */}
      
        </Route>
      
      
      
    </Routes>
    
    )
};

