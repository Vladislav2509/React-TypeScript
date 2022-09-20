import { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

import { SearchBar } from './SearchBar/searchBar';
import { Sidebar } from '../pageSidebar/Sidebar';

import iconBurger from '../../images/icons/menu.svg';
import iconUser from '../../images/icons/user.svg';
import iconLogOut from '../../images/icons/logOut.svg';

import '../navBar/navBarStyle.css';


export function NavBar(): JSX.Element {
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const { logout } = useAuth();
    const handleLogout = (): void => {
        logout();
    };
    const { user } = useAuth();
    const { userEmail } = useAuth();
    const UserTitle = "User Name";

    return (
        <div>
            <div className='headerNavBar'>

                <div className='burgerAndUserNameNavBar'>
                    <div className="burgerImgNavBar" onClick={() => setOpen(!open)}>
                        <img src={iconBurger} alt="#" />
                    </div>

                    <div className='userEmailNavBar'>
                        <div className='userTitleEmailNavBar'>{!user ? UserTitle : userEmail}</div>
                    </div>
                </div>

                <SearchBar />

                <div className="userNavBar" onClick={() => {
                    navigate("/user")
                }}>
                    <img src={iconUser} alt="#" />
                </div>

                <div className='logoutNavBar' onClick={() => {
                    navigate("/home")
                    handleLogout()
                }}>
                    <img src={iconLogOut} alt="#" />
                </div>



                {/* Sidebar */}
                {open && (<Sidebar onClick={() => setOpen(!open)}
                    menuSidebar={'Menu'} home={'Home'} all_post={'All Post'}
                    add_post={'Add post'} my_first_posts={'My first posts'}
                />)}
            </div>
            <Outlet />
        </div>
    );
}








