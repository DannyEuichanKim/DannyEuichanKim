// routes.js




import React from 'react';
import { IndexRoute, Router, Route } from 'react-router';

import App from './containers/App';
import Posts from './containers/Posts';
import AddPost from './containers/AddPost';
import Resources from './containers/Resources';
import Pinned from './containers/Pinned';
import Login from './containers/Login';

const Routes = (props) => (
  <Router {...props}>
    <Route path="/" component={ App }>
      <IndexRoute component={ Login } />
      <Route path="/posts" component={ Posts } />
      <Route path="/add-post" component={ AddPost } />
	  <Route path="/resources" component={ Resources } />
      <Route path="/pinned" component={ Pinned } />
    </Route>
  </Router>
);

export default Routes;
