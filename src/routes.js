// src/routes.js
import React from 'react';
import { Router, Route } from 'react-router'

import App from './components/App';
import About from './components/About';
import Home from './components/Home';
import NotFound from './components/NotFound';

const Routes = (props) => (
  <Router {...props}>
    <Route path="/" component={App} />
      <Route path="/about" component={About} />
      <Route path="/home" component={Home} />
    <Route path="*" component={NotFound} />
  </Router>
);

export default Routes;
