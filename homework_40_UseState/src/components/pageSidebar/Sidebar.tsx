import { Link, Outlet } from 'react-router-dom';
import '../pageSidebar/sidebarStyle.css';

type InputProps = {
  onClick: () => void,
  menuSidebar: string,
  home: string,
  all_post: string,
  add_post: string,
  my_favorites: string,
}


export const Sidebar = (props: InputProps ) => {
  const {menuSidebar, home, all_post, add_post, my_favorites} = props;


  // function Sidebar() {
    return (
       <div className="contentSidebar" >
            <div className="menuSidebar">
                <h1 className='textMenuSidebar'>{menuSidebar}</h1>
            </div>

            <div className="list">
                <ul>
                    <li><Link className='linkSidebar' to="/home">{home}</Link></li>
                    <li><Link className='linkSidebar' to="/all_post">{all_post}</Link></li>
                    <li><Link className='linkSidebar' to="/add_post">{add_post}</Link></li>
                    <li><Link className='linkSidebar' to="/my_favorites">{my_favorites}</Link></li>
                </ul>
            </div>
            
       </div>
     
    );
  }
  
  export default Sidebar;


