import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../../components/header/Header';
import Menu from '../../components/menu/Menu';
import SearchItens from '../../components/searchitens/SearchItens';

const Items = props => {
  const {
    searchTerm,
    searchs,
    isFetching,
    lastUpdate,
    error,
    errorMsg,
  } = props;
  return (
    <div className="grid">
      <Header showSearch {...props} />
      <main className="content">
        <Menu />
        <article>
          {/* // Super loading */}
          {isFetching &&
            searchs.length === 0 &&
            !error && <h2 className="loading">Loading...</h2>}
          {error && (
            <h2 className="error">
              Search failed...try again! Msg: {errorMsg}{' '}
            </h2>
          )}
          {lastUpdate && (
            <span>
              Last updated at {new Date(lastUpdate).toLocaleTimeString()}
            </span>
          )}
          {searchs.length !== 0 && (
            <div>
              <h2>Search Term Items : {searchTerm}</h2>
              <SearchItens {...props} />
              <pre>
                <code>{JSON.stringify(searchs, null, 4)}</code>
              </pre>
            </div>
          )}
        </article>
      </main>
    </div>
  );
};

Items.propTypes = {
  searchs: PropTypes.arrayOf(PropTypes.object),
  isFetching: PropTypes.bool,
  error: PropTypes.bool,
  errorMsg: PropTypes.string,
  lastUpdate: PropTypes.number,
  searchTerm: PropTypes.string,
};

Items.defaultProps = {
  searchs: [],
  isFetching: false,
  error: false,
  errorMsg: '',
  lastUpdate: null,
  searchTerm: '',
};

const mapStateToProps = state => {
  const { searchTerm, resultBySearchTerm, failedSearch } = state;

  const { error, errorMsg } = failedSearch || { error: false, errorMsg: '' };

  const { isFetching, lastUpdate, items: searchs } = resultBySearchTerm[
    searchTerm
  ] || {
    isFetching: false,
    items: [],
  };

  return {
    searchTerm,
    isFetching,
    lastUpdate,
    searchs,
    error,
    errorMsg,
  };
};

export const Unwrapped = Items;
export default connect(mapStateToProps)(Items);
