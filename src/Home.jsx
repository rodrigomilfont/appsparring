// @flow

import React from 'react';
import './App.css';
import logo from './logo.svg';
import donaGata84 from './donaGata84.jpg';
// import donaGata from './donaGata640.jpg';

const Home = () => (
  <div className="Home">
    <header className="App-header">
      <h1 className="App-title">Welcome to React</h1>
      <img src={donaGata84} alt="Dona Gata 84" />
      {/* <img src={donaGata} alt="Dona Gata" /> */}
      <img src={logo} className="App-logo" alt="logo" />
    </header>
    <h4>
      {' '}
      <a href="#deded">Blah</a>{' '}
    </h4>
    <h3>Welcome h3</h3>
    <h2>Welcome h2</h2>
    <h5>Welcome H5</h5>
    <p className="App-intro">
      To get started, edit <code>src/.js</code> and save to reload.{' '}
    </p>{' '}
  </div>
);

export default Home;
