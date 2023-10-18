import "./sidebar.scss";
import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import CategoryIcon from '@mui/icons-material/Category';
import BorderColorRoundedIcon from '@mui/icons-material/BorderColorRounded';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import BarChartIcon from '@mui/icons-material/BarChart';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from "react-router-dom";
import { DarkModeContext } from "../context/darkModeContext";
import { useContext } from "react";

const Sidebar = () => {

  const { dispatch } = useContext(DarkModeContext);
  return (
    <div className="sidebar">
        <div className="top">
          <Link to={"/"} style={{textDecoration:"none"}}><span className="logo">ecomAdmin</span>
          </Link>
          </div>
        <hr/>
        <div className="center">
            <ul>
              <p className="title">Main</p>
              <Link to={"/"} style={{textDecoration:"none"}}>
          
               <li><DashboardIcon className="icon"/><span>Dashboard</span></li></Link>
               <p className="title">Lists</p>
               <Link to={"/users"} style={{textDecoration:"none"}}>
          
               <li><AccountCircleOutlinedIcon className="icon"/><span>Users</span></li></Link>
               <Link to={"/products"} style={{textDecoration:"none"}}>
          
               <li><CategoryIcon className="icon"/><span>Products</span></li></Link>
               
               <li><BorderColorRoundedIcon className="icon"/><span>Orders </span></li>
               <li><LocalShippingOutlinedIcon className="icon"/><span>Delivery </span></li>
               <p className="title">Useful</p>
               <li><BarChartIcon className="icon"/><span>Stats </span></li>
               <li><CircleNotificationsIcon className="icon"/><span>Notifications </span></li>
               <p className="title">Service</p>
               <li><HealthAndSafetyIcon className="icon"/><span>System Health </span></li>
               <li><BorderColorIcon className="icon"/><span>Logs </span></li>
               <li><SettingsIcon className="icon"/><span>settings </span></li> 
               <p className="title">User</p>
               <li><AccountBoxIcon className="icon"/><span>Profile </span></li> 
               <li><LogoutIcon className="icon"/><span>Logout </span></li> 
            </ul>
        </div>
        <div className="bottom">
          <div className="colorOption" onClick={() => dispatch({ type: "LIGHT" })}></div>
          <div className="colorOption" onClick={() => dispatch({ type: "DARK" })}></div>
          
        </div>
    </div>
  )
}

export default Sidebar