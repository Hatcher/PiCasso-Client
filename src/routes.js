
import React from 'react';
import { Router, Route } from 'react-router';

import App from './components/App';
import Setup from './components/Setup';
import Setup2 from './components/Setup2';
import Setup3 from './components/Setup3';
import NotFound from './components/NotFound';

const Routes = (props) => (
  <Router {...props}>
    <Route path="/" component={App} />
    <Route path="/Setup" component={Setup} />
    <Route path="/Setup2" component={Setup2} />
    <Route path="/Setup3" component={Setup3} />
    <Route path='*' component={NotFound} />
  </Router>
);

export default Routes;