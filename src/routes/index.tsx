import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import Dashboard from '../pages/Dashboard';
import NewTask from '../pages/NewTask';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Dashboard} />
    <Route path="/new" accessCode="001" component={NewTask} />
  </Switch>
);

export default Routes;
