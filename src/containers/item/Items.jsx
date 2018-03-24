import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from '../../components/header/Header';

const Items = props => {
  const { posts, isFetching, lastUpdate } = props;
  return (
    <div className="grid">
      <Header />
      <main className="content">
        <article>
          <Link to="/">Home</Link>
          <br />
          {/* // Super loading */}
          {isFetching && posts.length === 0 && <h2>Loading...</h2>}
          {lastUpdate && (
            <span>
              Last updated at {new Date(lastUpdate).toLocaleTimeString()}
            </span>
          )}
          {posts.length !== 0 && (
            <div>
              <h2>Search Term Items : {props.searchTerm}</h2>
              <pre>
                <code>{JSON.stringify(posts, null, 4)}</code>
              </pre>
            </div>
          )}
        </article>
      </main>
    </div>
  );
};

Items.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object),
  isFetching: PropTypes.bool,
  lastUpdate: PropTypes.number,
  searchTerm: PropTypes.string,
};

Items.defaultProps = {
  posts: [],
  isFetching: false,
  lastUpdate: null,
  searchTerm: '',
};

const mapStateToProps = state => {
  const { searchTerm, postBySearchTerm } = state;

  const { isFetching, lastUpdate, items: posts } = postBySearchTerm[
    searchTerm
  ] || {
    isFetching: false,
    items: [],
  };

  return {
    searchTerm,
    isFetching,
    lastUpdate,
    posts,
  };
};

export default connect(mapStateToProps)(Items);
