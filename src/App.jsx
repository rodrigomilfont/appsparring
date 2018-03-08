import React from 'react';
import { Switch } from 'react-router-dom';
import Items from './components/items/Items';
import Home from './components/home/Home';
import MainLayout from './templates/main/Main';
import SearchLayout from './templates/search/Search';
import ComposeLayoutRoute from './templates/composeLayoutRoute';

const App = () => (
  <Switch>
    <ComposeLayoutRoute exact path="/" layout={MainLayout} component={Home} />
    <ComposeLayoutRoute
      path="/items?search=:search"
      layout={SearchLayout}
      component={props => <Items {...props} />}
    />
    <ComposeLayoutRoute
      path="/items/:id"
      layout={SearchLayout}
      component={props => <Items {...props} />}
    />
    <ComposeLayoutRoute
      path="/items/"
      layout={SearchLayout}
      component={Items}
    />
  </Switch>
);

export default App;
