import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import Login from '../pages/login/login';
import RepositoryList from '../pages/repository/repository';

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={RepositoryList} />

      </Switch>
    </Router>

  );
}
