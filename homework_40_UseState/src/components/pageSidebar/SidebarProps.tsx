import { useState } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import Sidebar from '../pageSidebar/Sidebar';

function SidebarProps(){
    
    const [open, setOpen] = useState(false);
    const { logout } = useAuth();
    const handleLogout = (): void => {
    logout();
  };

    return (
        
            <div>
                {open && (<Sidebar onClick={() => setOpen(!open)}

            menuSidebar={'Menu'} home={'Home'} all_post={'All Post'} 
            add_post={'Add post'} my_favorites={'My favorites posts'}/>)}
                    

                

                    



                   
                    
            </div>
            
            
                    
            
        
     
    );
  }
  
  export default SidebarProps;