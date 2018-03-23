import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './index.css';
import { setSearchTerm, getAPIDetails } from '../../actionCreators';

class HeaderSearch extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = event => {
      event.preventDefault();
      this.props.getAPIData(this.props.searchTerm);
      this.props.history.push(`/items?search=${this.props.searchTerm}`);
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
  getAPIData: PropTypes.func,
  handleSearchTermChange: PropTypes.func,
  searchTerm: PropTypes.string,
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
};

HeaderSearch.defaultProps = {
  getAPIData: function noop() {},
  handleSearchTermChange: function noo() {},
  searchTerm: '',
  history: {
    push: function noo() {},
  },
};

const mapStateToProps = state => ({
  searchTerm: state.searchTerm,
});

const mapDispatchToProps = dispatch => ({
  handleSearchTermChange(event) {
    dispatch(setSearchTerm(event.target.value));
  },
  getAPIData(searchTerm) {
    dispatch(getAPIDetails(searchTerm));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(HeaderSearch);
