import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

const SearchTemplate = props => (
  <div className="search-tpl search-active">{props.children}</div>
);

SearchTemplate.propTypes = {
  children: PropTypes.element,
};

SearchTemplate.defaultProps = {
  children: function noop() {},
};

export default SearchTemplate;
