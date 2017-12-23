import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

const Search = props => <div className="search">{props.children}</div>;

Search.propTypes = {
  children: PropTypes.element,
};

Search.defaultProps = {
  children: function noop() {},
};

export default Search;
