import React from 'react';
import { Provider } from 'react-redux';


import { Router } from 'react-router-dom';
import store from './store/store';
import Routes from './routes/router';
import history from './routes/history';

const App = () => (
  <Provider store={store}>
    <Router history={history} />
    <Routes />
  </Provider>
);

export default App;
