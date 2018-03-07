import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

const Main = props => <div className="main">{props.children}</div>;

Main.propTypes = {
  children: PropTypes.element,
};

Main.defaultProps = {
  children: function noop() {},
};

export default Main;
