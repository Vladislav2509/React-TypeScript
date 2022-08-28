import { useState } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import Sidebar from '../pageSidebar/Sidebar';
import '../navBar/navBarStyle.css';

import iconBurger from '../images/icons/menu.svg';
import iconSearch from '../images/icons/search.svg';
import iconUser from '../images/icons/user.svg';
import iconLogOut from '../images/icons/logOut.svg';



export function NavBar(): JSX.Element {
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const { logout } = useAuth();
    const handleLogout = (): void => {
    logout();
  };
    return (
        <div>
            <div className='header'>
                
                <div className="burgerNavBar" onClick={() => setOpen(!open)}>
                    <img src={iconBurger} alt="#" />
                </div>  

                <div className="searchNavBar">
                    <Link to=""><img src={iconSearch} alt="#" /></Link>
                </div>    
               
                <div className="userhNavBar">
                    <Link to="/user"><img src={iconUser} alt="#" /></Link>
                </div>  

                <div className='logout' onClick={() => {
                    navigate("/login");
                    handleLogout(); setOpen(!open)}}>
                    <Link to="/user"><img src={iconLogOut} alt="#" /></Link>
                </div>

                {/* Sidebar */}
                    {open && (<Sidebar onClick={() => setOpen(!open)}
                        menuSidebar={'Menu'} home={'Home'} all_post={'All Post'} 
                        add_post={'Add post'} my_favorites={'My favorites posts'}/>)}
            </div>
            <Outlet/>        
        </div>
    );
  }
  
//   export default NavBar;







