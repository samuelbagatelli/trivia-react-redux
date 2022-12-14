import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Login from './pages/Login';
import Config from './pages/Config';

export default function App() {
  return (
    <Switch>
      <Route exact path="/configuracao" component={ Config } />
      <Route exact path="/" component={ Login } />
    </Switch>

  );
}
