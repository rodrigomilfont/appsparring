import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Header from '../header/Header';

class Items extends React.Component {
  constructor(props) {
    super(props);

    // It's necessary?
    this.props = props;

    this.state = {
      termHeader: '',
    };

    this.handleHeader = searchTerm => {
      this.setState({ termHeader: searchTerm });
      this.makeRequest(searchTerm);
    };

    this.makeRequest = searchTerm => {
      axios
        .get(`https://api.mercadolibre.com/sites/MLA/search?q=${searchTerm}`)
        .then(response => {
          this.setState({ resultSearch: response.data });
        });
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

    this.makeRequest(value);
  }

  render() {
    return (
      <div className="grid">
        <Header
          onSearchTermChange={this.handleHeader}
          searchTerm={this.state.termHeader}
          {...this.props}
        />
        <main className="content">
          <article>
            <Link to="/">Home</Link>
            <h1>Search Term : {this.state.termHeader}</h1>
            <pre>
              <code>{JSON.stringify(this.state.resultSearch, null, 4)}</code>
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
