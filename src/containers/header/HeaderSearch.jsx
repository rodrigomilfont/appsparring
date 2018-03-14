import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './index.css';

class HeaderSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: this.props.searchTerm || '',
    };

    this.handleSearchTermChange = event => {
      this.setState({ searchTerm: event.target.value });
      this.props.onSearchTermChange(event.target.value);
    };

    this.handleSubmit = event => {
      event.preventDefault();
      this.props.history.push(`/items?search=${this.state.searchTerm}`);
    };
  }

  render() {
    return (
      <div className="box-search">
        <form onSubmit={this.handleSubmit}>
          <input
            onChange={this.handleSearchTermChange}
            value={this.state.searchTerm}
            type="text"
            placeholder="Buscar"
            tabIndex="0"
          />
        </form>
        <Link
          to={`/items?search=${this.state.searchTerm}`}
          className="bt-search">
          Buscar
        </Link>
      </div>
    );
  }
}

HeaderSearch.propTypes = {
  onSearchTermChange: PropTypes.func,
  searchTerm: PropTypes.string,
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
};

HeaderSearch.defaultProps = {
  onSearchTermChange: function noo() {},
  searchTerm: '',
  history: {
    push: function noo() {},
  },
};

export default HeaderSearch;
