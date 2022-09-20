import React from 'react';
import {Routes, Route } from 'react-router-dom';
import {NavBar} from './components/navBar/NavBar';
import {HomePage} from './components/HomePage/HomePage';
import {PostLists} from './components/postCard/trainingPostCard/PostLists/PostLists';



// ROUTES OF LOGIN_FIREBASE
// import HomePage from './components/loginRegistration/newLoginPages/HomePage';
// import LoginPage from './components/loginRegistration/newLoginPages/LoginPage';
// import RegisterPage from './components/loginRegistration/newLoginPages/RegisterPage';


import { Login } from './components/Authorization/LoginRight/Login/Login';
import { Registration  } from './components/Authorization/LoginRight/Registration/Registration';
import { RegistrationConfirmation } from './components/Authorization/LoginRight/RegistrationConfirmation/RegistrationConfirmation';
import { ProtectedRoute } from './components/ProtectedRoute/ProtectedRoute';
import { ResetPassword } from './components/Authorization/LoginRight/reset-password/reset-password';
import { AddPost } from './components/postCard/AddPost/AddPost';
import { PostCardFetch } from './components/postCard/MainPosts-Fetch/PostCard-Fetch/PostCardFetch';




export const App = () => {
    return (
    <Routes>
        <Route path="/" element={<NavBar />}>
      
            <Route path="/all_post" element={
                <ProtectedRoute>
                    <PostCardFetch post={undefined} />
                    {/* <MainPage /> */}
                </ProtectedRoute>
                }>
            </Route>
        
            {/* <Route path="/all_post" element={<PostLists />}/> */}

            <Route path="/add_post" element={
                <ProtectedRoute>
                    <AddPost />
                </ProtectedRoute>
                }>
            </Route>

            <Route path="/my_first_posts" element={
                <ProtectedRoute>
                    <PostLists />
                </ProtectedRoute>
                }>
            </Route>

            <Route path="/user" element={<Login />}/>

            <Route path="/home" element={<HomePage />}/>

            <Route path="/Login" element={<Login />}/>

            <Route path="/registration" element={<Registration />}></Route>

            <Route path="/registrationConfirmation" element={<RegistrationConfirmation email={''}/>}></Route>

            <Route path="/backToHome" element={<HomePage/>}></Route>

            <Route path="/reset_password" element={<ResetPassword />}></Route>
    
      
        </Route>
      
      
      
    </Routes>
    
    )
};

