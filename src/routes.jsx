import React from 'react';
import { Route, Switch } from 'react-router-dom';

import SignIn from './pages/SignIn';

export default (
  <Route>
    <Switch>
      <Route path="/" component={SignIn} exact />
    </Switch>
  </Route>
);
