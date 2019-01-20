import React from 'react';
import { NavLink } from 'react-router-dom';

import './SideDrawer.css';

const sideDrawer = props => {
  let drawerClasses = 'side-drawer';
    if (props.show) {
    drawerClasses = 'side-drawer open'
    }
  
  return (
    <nav className={drawerClasses}>
      <li>
        <NavLink to="/auth" onClick={() => this.setState({sideDrawerOpen: false})}>Auth</NavLink>
      </li>
      <li>
        <NavLink to="/events" onClick={() => this.setState({sideDrawerOpen: false})}>Events</NavLink>
      </li>
      <li>
        <NavLink to="/bookings" onClick={() => this.setState({sideDrawerOpen: false})}>Bookings</NavLink>
      </li>
      <li>
        <button>Logout</button>
      </li>
    </nav>
  );
};
  
export default sideDrawer;