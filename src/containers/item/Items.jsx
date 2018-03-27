import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from '../../components/header/Header';

const Items = props => {
  const { searchs, isFetching, lastUpdate } = props;
  return (
    <div className="grid">
      <Header />
      <main className="content">
        <article>
          <Link to="/">Home</Link>
          <br />
          {/* // Super loading */}
          {isFetching && searchs.length === 0 && <h2>Loading...</h2>}
          {lastUpdate && (
            <span>
              Last updated at {new Date(lastUpdate).toLocaleTimeString()}
            </span>
          )}
          {searchs.length !== 0 && (
            <div>
              <h2>Search Term Items : {props.searchTerm}</h2>
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
  lastUpdate: PropTypes.number,
  searchTerm: PropTypes.string,
};

Items.defaultProps = {
  searchs: [],
  isFetching: false,
  lastUpdate: null,
  searchTerm: '',
};

const mapStateToProps = state => {
  const { searchTerm, resultBySearchTerm } = state;

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
  };
};

export default connect(mapStateToProps)(Items);
