/* eslint flowtype-errors/show-errors: 0 */
import React from 'react';
import { Switch, Route } from 'react-router';

// Custom
import App from './containers/App';
import HomePage from './containers/home/HomePage';
import CounterPage from './containers/counter/CounterPage';

export default () => (
   <App>
      <Switch>
         <Route path="/counter" component={CounterPage} />
         <Route path="/" component={HomePage} />
      </Switch>
   </App>
);
