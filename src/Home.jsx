// @flow

import React from 'react';
import Header from './components/header/Header';

const Home = (props) => (
  <div className="grid">
    <Header {...props } />
    <aside className="sidebar-left">
      <article>
        <h4>
          <a href="#deded">Blah</a>
        </h4>
        <h2>Welcome h2</h2>
        <h5>Welcome H5</h5>
      </article>
    </aside>
    <main className="content">
      <article>
        <h3>Welcome h3</h3>
        <p>
          Is a non-negative <strong>percentage</strong> value, relative to the
          block size of the grid container. If the size of the grid container
          depends on the size of its tracks, then the percentage must be treated
          as auto. The intrinsic size contributions of the track may be adjusted
          to the size of the grid container, and increase the final size of the
          track by the minimum amount that would result in honoring the
          percentage.
        </p>{' '}
        <p>
          Is a non-negative <strong>percentage</strong> value, relative to the
          block size of the grid container. If the size of the grid container
          depends on the size of its tracks, then the percentage must be treated
          as auto. The intrinsic size contributions of the track may be adjusted
          to the size of the grid container, and increase the final size of the
          track by the minimum amount that would result in honoring the
          percentage.
        </p>{' '}
        <p>
          Is a non-negative <strong>percentage</strong> value, relative to the
          block size of the grid container. If the size of the grid container
          depends on the size of its tracks, then the percentage must be treated
          as auto. The intrinsic size contributions of the track may be adjusted
          to the size of the grid container, and increase the final size of the
          track by the minimum amount that would result in honoring the
          percentage.
        </p>
      </article>
    </main>
    <aside className="sidebar-rigth">
      <p>
        <span className="bt_nav">
          <a className="bt_home" href="#home">
            Home
          </a>
        </span>
      </p>
    </aside>
    <footer className="footer">
      <p className="footer-text">
        To get started, edit <code>src/.js</code> and save to reload.
      </p>
    </footer>
  </div>
);

export default Home;
