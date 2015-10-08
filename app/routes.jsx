import React from 'react';
import { Router, Route } from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';

import App from './containers/App';
import Children from './containers/ChildrenContainer';

export default (
  <Router history={ createBrowserHistory() }>
    <Route
      path='/'
      component={ App({ React }) }
    >
      <Route
        path='/home'
        component={ Children({ React }) }
      />
    </Route>
  </Router>
);
