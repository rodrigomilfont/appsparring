import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Header from '../../components/header/Header';
import SearchService from '../../components/items/SearchService';

class Items extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      termHeader: '',
      results: [],
    };

    this.searchService = new SearchService();

    this.search = searchTerm => {
      this.setState({ termHeader: searchTerm });
      this.searchService.search({ value: searchTerm.trim() });
    };
  }

  componentWillMount() {
    // Duplicate code
    const query = new URLSearchParams(this.props.location.search);
    const value = query.get('search');

    this.setState({ termHeader: value });
  }

  componentDidMount() {
    // Duplicate code
    const query = new URLSearchParams(this.props.location.search);
    const value = query.get('search');

    this.searchService.getResults().subscribe(res => {
      this.setState({ results: res });
    });

    this.search(value);
  }

  render() {
    return (
      <div className="grid">
        <Header
          onSearchTermChange={this.search}
          searchTerm={this.state.termHeader}
          {...this.props}
        />
        <main className="content">
          <article>
            <Link to="/">Home</Link>
            <h1>Search Term Items : {this.state.termHeader}</h1>
            <pre>
              <code>{JSON.stringify(this.state.results, null, 4)}</code>
            </pre>
          </article>
        </main>
      </div>
    );
  }
}

Items.propTypes = {
  location: PropTypes.shape({
    search: PropTypes.string,
  }),
};

Items.defaultProps = {
  location: {
    search: '',
  },
};

export default Items;
