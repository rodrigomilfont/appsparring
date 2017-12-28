import React from 'react';
import { Link } from 'react-router-dom';

import axios from 'axios';
import Header from '../header/Header';

class Items extends React.Component {
  constructor(props) {
    super(props);
    console.log('props: ', props);

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
  componentDidMount() {}
  render() {
    return (
      <div className="grid">
        <Header onSearchTermChange={this.handleHeader} />
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

export default Items;
