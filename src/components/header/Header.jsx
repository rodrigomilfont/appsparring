import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import HeaderSearch from '../../containers/header/HeaderSearch';
import './index.css';

const Header = props => {
  const { showSearch } = props;
  return (
    <header className="header">
      <div className="box-logo">
        <Link to="/"> Logo </Link>
      </div>
      {showSearch && <HeaderSearch {...props} />}
    </header>
  );
};

Header.propTypes = {
  showSearch: PropTypes.bool,
};

Header.defaultProps = {
  showSearch: false,
};

export default Header;
