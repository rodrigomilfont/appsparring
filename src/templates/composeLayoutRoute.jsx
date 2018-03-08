import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';

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

export default ComposeLayoutRoute;
