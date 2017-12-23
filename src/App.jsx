import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import Items from './components/items/Items';
import Home from './components/home/Home';
import MainLayout from './templates/main/Main';
import SearchLayout from './templates/search/Search';

const ComposeLayoutRoute = ({ component: Component, layout: Layout }) => (
  <Route
    render={props => (
      <Layout>
        <Component {...props} />
      </Layout>
    )}
  />
);

ComposeLayoutRoute.propTypes = {
  component: PropTypes.func,
  layout: PropTypes.func,
};

ComposeLayoutRoute.defaultProps = {
  component: [],
  layout: [],
};

const App = () => (
  <Switch>
    <ComposeLayoutRoute exact path="/" layout={MainLayout} component={Home} />
    <ComposeLayoutRoute
      exact
      path="/items"
      layout={SearchLayout}
      component={Items}
    />
  </Switch>
);

export default App;
