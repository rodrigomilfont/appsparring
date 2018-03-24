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
        <h4>
          <Link to="/items">Items</Link>
        </h4>
        <h1>Home - Home.jsx</h1>
      </article>
    </aside>
    <main className="content">
      <img src={donaGata} alt="" />
      <img src={Felix} alt="Felix" width="200" />
      <article>
        <pre>
          <code>{JSON.stringify(props, null, 4)}</code>
        </pre>
      </article>
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
