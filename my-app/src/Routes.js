import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import Projects from './Projects';
import Blog from './Blog';
import ErrorPage from './ErrorPage';
import Random from './Random';

/** Create routes for application. */
export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/projects" component={Projects} />
      <Route path="/blog" component={Blog} />
      <Route path="/random" component={Random} />
      <Route component={ErrorPage} />
    </Switch>
  );
}

