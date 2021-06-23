import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import Home from './containers/Home';
import Login from './containers/Login';
import NotFound from './containers/NotFound';
import PageList from './containers/PageList';
import PageDetail from './containers/PageDetail';

export default function Routes() {
  return (
    <Router>
      <Route path="/" exact={true} component={Home} />
      <Route path="/login" exact={true} component={Login} />
      <Route path="/404" exact={true} component={NotFound} />
      <Route path="/page-list" exact={true} component={PageList} />
      <Route path="/page-detail/:id" exact={true} component={PageDetail} />
    </Router>
  );
}
