// @flow

import React from 'react';
// import logo from './logo.svg';

const Home = () => (
  <div className="Home">
    <header className="App-header">
      <h1 className="App-title">Welcome to React</h1>
      {/* <img src={logo} className="App-logo" alt="logo" /> */}
    </header>
    <h3>Welcome h3</h3>
    <h2>Welcome h2</h2>
    <h4>
      {' '}
      <a>Blah</a> {' '}
    </h4>
    <h5>H5</h5>
    <p className="App-intro">
      To get started, edit <code>src/.js</code> and save to reload.{' '}
    </p>{' '}
  </div>
);

export default Home;
