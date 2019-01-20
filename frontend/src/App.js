import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';

import AuthPage from './pages/Auth';
import BookingsPage from './pages/Bookings';
import EventsPage from './pages/Events';
import Toolbar from './components/Navigation/Toolbar/Toolbar';
import SideDrawer from './components/Navigation/SideDrawer/SideDrawer';
import Sbackdrop from './components/Navigation/Sbackdrop/Sbackdrop';
import AuthContext from './context/auth-context';

import './App.css';

class App extends Component {
  state = {
    sideDrawerOpen: false,
    token: null,
    userId: null
  };

  login = (token, userId, tokenExpiration) => {
    this.setState({ token: token, userId: userId });
  }

  logout = () => {
    this.setState({ token: null, userId: null });
  }

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return {sideDrawerOpen: !prevState.sideDrawerOpen};
    });
  };

  backdropClickHandler = () => {
    this.setState({sideDrawerOpen: false});
  };
  render() {
    let sbackdrop;
    
    if (this.state.sideDrawerOpen) {
      sbackdrop = <Sbackdrop click={this.backdropClickHandler}/>
    }
    
    return (
      <BrowserRouter>
      <React.Fragment>
      <AuthContext.Provider value={{ 
        token: this.state.token, 
        userId: this.state.userId, 
        login: this.login, 
        logout: this.logout }}>
      <div style={{height: '100%'}}>
      <Toolbar drawerClickHandler={this.drawerToggleClickHandler}/>
      <SideDrawer show={this.state.sideDrawerOpen} />
      {sbackdrop}
      <main className="main-content">
      <Switch>
      {this.state.token && <Redirect from="/" to="/events" exact />}
      {this.state.token && <Redirect from="/auth" to="/events" exact />}
      {!this.state.token && (<Route path="/auth" component={AuthPage} />)}
      <Route path="/events" component={EventsPage} />
      {this.state.token && (<Route path="/bookings" component={BookingsPage} />)}
      {!this.state.token && <Redirect to="/auth" exact />}
      </Switch>
      </main>
      </div>
      </AuthContext.Provider>
      </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
