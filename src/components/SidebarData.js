import React from 'react';

import UserActivites from '../images/User-activites.png';
import UserDashboard from '../images/user-dashboard.png';
import ScreenMonitoring from '../images/Screen-monitoring.png';
import Network from '../images/Network.png';
import ActiveProcesses from '../images/Active-processes.png';
import FileSystems from '../images/File-System.png';
import SystemActivities from '../images/System-Activity.png';


export const SidebarData = [
    {
        title: 'User Activities',
        path: '/',
        icon: <img src ={UserActivites} alt="" style ={{maxWidth:"2.5rem", marginLeft: "1rem", marginRight:"1rem"}}/>,
        className: 'nav-text'
    },
    {
        title: 'User Dashboard',
        path: '/',
        icon: <img src ={UserDashboard} alt="" style ={{maxWidth:"2.5rem", marginLeft: "1rem", marginRight:"1rem"}}/>,
        className: 'nav-text'
    },
    {
        title: 'Screen Monitoring',
        path: '/',
        icon: <img src ={ScreenMonitoring} alt="" 
        style ={{maxWidth:"2.5rem", marginLeft: "1rem", marginRight:"1rem"}}/>,
        className: 'nav-text'
    },
    {
        title: 'Network',
        path: '/',
        icon: <img src ={Network} alt="" 
        style ={{maxWidth:"2.5rem", marginLeft: "1rem", marginRight:"1rem"}}/>,
        className: 'nav-text'
    },
    {
        title: 'Active Processes',
        path: '/',
        icon: <img src ={ActiveProcesses} alt="" 
        style ={{maxWidth:"2.5rem", marginLeft: "1rem", marginRight:"1rem"}}/>,
        className: 'nav-text'
    },
    {
        title: 'File Systems',
        path: '/',
        icon: <img src ={FileSystems} alt="" style ={{maxWidth:"2.5rem", marginLeft: "1rem", marginRight:"1rem"}}/>,
        className: 'nav-text'
    },
    {
        title: 'System Activities',
        path: '/',
        icon: <img src ={SystemActivities} alt="" 
        style ={{maxWidth:"2.5rem", marginLeft: "1rem", marginRight:"1rem"}}/>,
        className: 'nav-text'
    },
]