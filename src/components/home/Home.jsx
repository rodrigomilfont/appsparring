import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../header/Header';
import Menu from '../menu/Menu';
import donaGata from '../header/donaGata84.jpg';
import Felix from '../header/felix_the_cat.svg';
import './index.css';

const Home = props => (
  <div className="grid">
    <Header {...props} />
    <Menu />
    <main className="content">
      <article>
        <h1>Home</h1>
        <img src={donaGata} alt="" />
      </article>
      <img src={Felix} alt="Felix" width="200" />
    </main>
    <aside className="sidebar-rigth">
      <p>
        <span className="bt_nav">
          <Link to="/">Home Items</Link>
        </span>
      </p>
    </aside>
    <footer className="footer">
      <p className="footer-text">...</p>
    </footer>
  </div>
);

export default Home;
