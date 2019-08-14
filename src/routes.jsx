import React from 'react';
import { Route, Switch } from 'react-router-dom';

import SignIn from './pages/SignIn';
import About from './pages/About';

export default (
  <Route>
    <Switch>
      <Route path="/" component={SignIn} exact />
      <Route path="/about" component={About} />
    </Switch>
  </Route>
);
