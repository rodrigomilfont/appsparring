import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './index.css';
import { setSearchTerm, fetchSearch } from '../../store/search/actionCreators';

class HeaderSearch extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = event => {
      event.preventDefault();
      this.props.history.push(`/items?search=${this.props.searchTerm}`);
      this.props.fetchSearchAsync(this.props.searchTerm);
    };
  }

  render() {
    return (
      <div className="box-search-header">
        <form onSubmit={this.handleSubmit}>
          <input
            onChange={this.props.handleSearchTermChange}
            value={this.props.searchTerm}
            type="text"
            placeholder="Search"
            tabIndex="0"
          />
        </form>
        <Link
          to={`/items?search=${this.props.searchTerm}`}
          className="bt-search">
          Buscar
        </Link>
      </div>
    );
  }
}

HeaderSearch.propTypes = {
  fetchSearchAsync: PropTypes.func,
  handleSearchTermChange: PropTypes.func,
  searchTerm: PropTypes.string,
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
};

HeaderSearch.defaultProps = {
  fetchSearchAsync: function noop() {},
  handleSearchTermChange: function noo() {},
  searchTerm: '',
  history: {
    push: function noo() {},
  },
};

const mapStateToProps = state => {
  const { searchTerm } = state.search;
  return {
    searchTerm,
  };
};

const mapDispatchToProps = dispatch => ({
  handleSearchTermChange(event) {
    dispatch(setSearchTerm(event.target.value));
  },
  fetchSearchAsync(searchTerm) {
    dispatch(fetchSearch(searchTerm));
  },
});

export const Unwrapped = HeaderSearch;

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(HeaderSearch),
);
