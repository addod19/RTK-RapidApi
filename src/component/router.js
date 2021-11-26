
  
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Header';
import UserList from '../container/userList';
import Opportunities from '../containers/opportunities';

const AppRouter = () => (
  <Router>
    <>
      <Header />
      <Switch>
        <Route path="/" component={UserList} />
        <Route path="/opportunities/:id" component={Opportunities} />
      </Switch>
    </>
  </Router>
);

export default AppRouter;