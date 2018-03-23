import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from '../../components/header/Header';

const Items = props => (
  <div className="grid">
    <Header />
    <main className="content">
      <article>
        <Link to="/">Home</Link>
        <h1>Search Term Items : {props.searchTerm}</h1>
        <pre>
          <code>{JSON.stringify(props.searchResult, null, 4)}</code>
        </pre>
      </article>
    </main>
  </div>
);

Items.propTypes = {
  searchTerm: PropTypes.string,
  searchResult: PropTypes.shape({
    site_id: PropTypes.string,
    query: PropTypes.string,
  }),
};

Items.defaultProps = {
  searchTerm: '',
  searchResult: {
    site_id: '',
    query: '',
  },
};

const mapStateToProps = state => ({
  searchTerm: state.searchTerm,
  searchResult: state.apiData,
});

export default connect(mapStateToProps)(Items);
