import React from "react";
import ProductList from '../products';
import Login from '../../components/login';
import { Switch, Route } from 'react-router-dom';

const SideBar = () => (
  <div className="sidebar">
    <Switch>
      <Route exact path='/' component={Login}></Route>
      <Route exact path='/login' component={Login}></Route>
    </Switch>
  </div>
);

export default SideBar;
