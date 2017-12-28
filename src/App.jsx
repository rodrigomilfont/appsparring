import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import Items from './components/items/Items';
import Home from './components/home/Home';
import MainLayout from './templates/main/Main';
import SearchLayout from './templates/search/Search';

const ComposeLayoutRoute = ({
  component: Component,
  layout: Layout,
  ...rest
}) => (
  <Route
    {...rest}
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
