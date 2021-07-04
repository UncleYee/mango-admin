import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import PageList from './containers/PageList';
import PageDetail from './containers/PageDetail';

export default function Routes() {
  return (
    <Router>
      <Route path="/" exact component={PageList} />
      <Route path="/detail/:id" exact component={PageDetail} />
    </Router>
  );
}
