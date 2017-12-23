import React from 'react';
import './index.css';
import LogoML from './Logo_ML.png';

const Header = () => (
  <header className="header">
    <div className="box-logo">
      <a href="#home">
        <img src={LogoML} alt="logo" />
      </a>
    </div>
    <div className="box-search">
      <input value="" type="text" placeholder="Buscar" />
      <a href="#buscar" className="bt-search">
        Buscar
      </a>
    </div>
  </header>
);

export default Header;
