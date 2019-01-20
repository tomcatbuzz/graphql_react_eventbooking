import React from 'react';
import { NavLink } from "react-router-dom";

import AuthContext from '../../../context/auth-context';
import './Toolbar.css';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';

const toolbar = props => (
  <AuthContext.Consumer>
  {(context) => {
    return (
      <header className="toolbar">
        <nav className="toolbar__navigation">
          <div className="toolbar__toggle-button">
            <DrawerToggleButton click={props.drawerClickHandler} />
          </div>
          <div className="toolbar__logo"><NavLink to="/">Eventuator</NavLink></div>
          <div className="spacer" />
          <div className="toolbar-navigation__items">
            <ul>
              {!context.token && (
                <li>
                  <NavLink to="/auth">Authentication</NavLink>
                </li>
              )}
              <li>
                <NavLink to="/events">Events</NavLink>
              </li>
              {context.token && (
                <React.Fragment>
                <li>
                  <NavLink to="/bookings">Bookings</NavLink>
                </li>
                <li>
                  <button onClick={context.logout}>Logout</button>
                </li>
                </React.Fragment>
              )}
            </ul>
          </div>
        </nav>
      </header>
    );
  }}
  </AuthContext.Consumer>
);

export default toolbar;