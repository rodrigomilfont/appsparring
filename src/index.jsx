// @flow

import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render } from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const element = document.getElementById('root');

const renderApp = () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
    element,
  );
};

renderApp();

if (module.hot) {
  module.hot.accept('./App', () => {
    renderApp();
  });
}

registerServiceWorker();
