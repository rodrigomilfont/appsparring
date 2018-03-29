import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../header/Header';
import donaGata from '../header/donaGata84.jpg';
import Felix from '../header/felix_the_cat.svg';

const Home = props => (
  <div className="grid">
    <Header {...props} />
    <aside className="sidebar-left">
      <article>
        <ul>
          <li>
            <Link to="/items">Miercado Libre</Link>
          </li>
          <li>
            <Link to="/items">Miercado Libre</Link>
          </li>
        </ul>
      </article>
    </aside>
    <main className="content">
      <img src={donaGata} alt="" />
      <article>
        <h1>Home</h1>
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
      <p className="footer-text">Footer</p>
    </footer>
  </div>
);

export default Home;
