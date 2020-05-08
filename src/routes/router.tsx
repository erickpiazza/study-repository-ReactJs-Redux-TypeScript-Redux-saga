import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Repository from '../pages/repository/repository';
import Login from '../pages/login/login';

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/repository" component={Repository} />
      </Switch>
    </Router>

  );
}
