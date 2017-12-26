import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './index.css';
import LogoML from './Logo_ML.png';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
    };

    this.handleSearchTermChange = event => {
      this.setState({ searchTerm: event.target.value });
      this.props.onSearchTermChange(event.target.value);
    };
  }
  render() {
    return (
      <header className="header">
        <div className="box-logo">
          <Link to="/">
            <img src={LogoML} alt="logo" />
          </Link>
        </div>
        <div className="box-search">
          <input
            onChange={this.handleSearchTermChange}
            value={this.state.searchTerm}
            type="text"
            placeholder="Buscar"
          />
          <Link to={`/items?q=${this.state.searchTerm}`} className="bt-search">
            Buscar
          </Link>
        </div>
      </header>
    );
  }
}

Header.propTypes = {
  onSearchTermChange: PropTypes.func,
};

Header.defaultProps = {
  onSearchTermChange: function noo() {},
};

export default Header;
