import React from 'react';
import { Link } from 'react-router-dom';
import HeaderSearch from '../../containers/header/HeaderSearch';
import './index.css';
import Felix from './felix_the_cat.svg';

const Header = props => (
  <header className="header">
    <div className="box-logo">
      <Link to="/">
        <img src={Felix} alt="Felix" width="35" />
      </Link>
    </div>
    <HeaderSearch {...props} />
  </header>
);

export default Header;
