import React from 'react';
import { Link } from 'react-router-dom';
import HeaderSearch from '../../containers/header/HeaderSearch';
import './index.css';
import LogoML from './Logo_ML.png';

const Header = props => {
  console.log('Header: ',  props);
  return (
    <header className="header">
      <div className="box-logo">
        <Link to="/">
          <img src={LogoML} alt="logo" />
        </Link>
      </div>
        <HeaderSearch {...props} />
    </header>
  );
};

export default Header;
