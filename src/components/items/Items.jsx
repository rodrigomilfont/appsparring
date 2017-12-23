// @flow

import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../header/Header';

const Items = props => (
  <div className="grid">
    <Header {...props} />
    <main className="content">
      <article>
        <Link to="/">Home</Link>
        <pre>
          <code>{JSON.stringify(props, null, 4)}</code>
        </pre>
      </article>
    </main>
  </div>
);

export default Items;
