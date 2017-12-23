import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';
import LogoML from './Logo_ML.png';

const Header = () => (
  <header className="header">
    <div className="box-logo">
      <Link to="/">
        <img src={LogoML} alt="logo" />
      </Link>
    </div>
    <div className="box-search">
      <input value="" type="text" placeholder="Buscar" />
      <Link to="/items" className="bt-search">
        Buscar
      </Link>
    </div>
  </header>
);

export default Header;
