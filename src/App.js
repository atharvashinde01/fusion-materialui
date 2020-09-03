import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

import Drawer from './components/Drawer';
import UserActivities from './pages/UserActivities';
import UserDashboard from './pages/UserDashboard';
import ScreenMonitoring from './pages/ScreenMonitoring';
import MainPage from './pages/MainPage';

import './App.css';

const App = () => {
  return (
    <Router>
      <Drawer />

      <Switch>
        <Route to='/' exact>
          <MainPage />
        </Route>
        <Route path='/useractivities' exact>
          <UserActivities />
        </Route>
        <Route path='/userdashboard' exact>
          <UserDashboard />
        </Route>
        <Route path='/sm' exact>
          <ScreenMonitoring />
        </Route>
        <Redirect to='/' />

      </Switch>

    </Router>
  );
};

export default App;
