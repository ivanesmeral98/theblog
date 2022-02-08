import styles from '../styles/Sidebar.module.css'
import { AiOutlineHome } from "react-icons/ai";
import { RiQuillPenLine } from "react-icons/ri";
import { BsBook } from "react-icons/bs";
const Sidebar = () => {
    return (
        <div className="fixed top-0 left-0 h-screen w-16 m-0
                        text-white bg-gray-900 flex flex-col shadow-lg">
            <i><SidebarIcon icon={<AiOutlineHome/>} label="Home"/></i>
            <i><SidebarIcon icon={<RiQuillPenLine/>} label="Blog"/></i>
            <i><SidebarIcon icon={<BsBook/>} label="Currently Reading"/></i>

              
        </div>
      );



}

const SidebarIcon = ({ icon, label }) => {
    return(
        <div className='sidebar-icon group'>
            {icon}
            <span className='sidebar-label group-hover:scale-100'>
                {label}
            </span>
        </div>
    );

};

export default Sidebar;