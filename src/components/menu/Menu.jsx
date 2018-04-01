import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => (
    <aside className="sidebar-left">
      <article>
        <ul>
          <li>
            <Link to="/items">Miercado Libre Api</Link>
          </li>
          <li>
            <Link to="/items">StarWars Api</Link>
          </li>
        </ul>
      </article>
    </aside>
)

export default Menu
