import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../header/Header';

class Items extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      termHeader: '',
    };
    this.handleHeader = searchTerm => {
      this.setState({ termHeader: searchTerm });
    };
  }
  render() {
    return (
      <div className="grid">
        <Header onSearchTermChange={this.handleHeader} />
        <main className="content">
          <article>
            <Link to="/">Home</Link>
            <h1>Search Term : {this.state.termHeader}</h1>
          </article>
        </main>
      </div>
    );
  }
}

export default Items;
