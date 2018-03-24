import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './index.css';
import { setSearchTerm, fetchPosts } from '../../actionCreators';

class HeaderSearch extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = event => {
      event.preventDefault();
      this.props.history.push(`/items?search=${this.props.searchTerm}`);
      this.props.fetchPostAsync(this.props.searchTerm);
    };
  }

  render() {
    return (
      <div className="box-search">
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
  fetchPostAsync: PropTypes.func,
  handleSearchTermChange: PropTypes.func,
  searchTerm: PropTypes.string,
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
};

HeaderSearch.defaultProps = {
  fetchPostAsync: function noop() {},
  handleSearchTermChange: function noo() {},
  searchTerm: '',
  history: {
    push: function noo() {},
  },
};

const mapStateToProps = state => {
  const { searchTerm } = state;
  return {
    searchTerm,
  };
};

const mapDispatchToProps = dispatch => ({
  handleSearchTermChange(event) {
    dispatch(setSearchTerm(event.target.value));
  },
  fetchPostAsync(searchTerm) {
    dispatch(fetchPosts(searchTerm));
  },
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(HeaderSearch),
);
