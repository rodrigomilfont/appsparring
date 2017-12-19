import React from 'react';
import { Route, Switch } from 'react-router-dom';
// import './App.css';
import Home from './Home';

const App = () => (
  <div className="app-class-name">
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  </div>
);

export default App;
