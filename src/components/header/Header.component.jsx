import React from "react";
import { NavLink } from 'react-router-dom';

import './style.scss';

const Header = () => (
  <div className="header">
    <div className="header__logo">
      <p>CAR RENTAL</p>
    </div>
    <div className="header__navigation">
      <NavLink className="header__navigation--link" exact to='/login'>
        Login
      </NavLink>
    </div>
  </div>
);

export default Header;
