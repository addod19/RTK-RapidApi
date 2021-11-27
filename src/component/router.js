import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './header';
import UserList from '../container/userList';
import Opportunities from '../container/opportunities';

const AppRouter = () => (
  <Router>
    <>
      <Header />
      <Routes>
        <Route path="/" component={UserList} />
        <Route path="/opportunities/:id" component={Opportunities} />
      </Routes>
    </>
  </Router>
);

export default AppRouter;
