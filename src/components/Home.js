import React, { Component } from 'react';
import AddQuote from './AddQuote';

class Home extends Component {
  state = {
    quotes: []
  }

  addQuote = quote => {
    fetch('http://localhost:3001/api/v1/add', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({quote: {blurb: quote.text, contributor: quote.author, category_id: quote.category_id}})
    }).then(res => res.json())
    .then(quote => this.setState({ quotes: this.state.quotes.concat(quote)}))
  }

  render() {
    return (
      <div>
      <AddQuote addQuote={this.addQuote} />
      </div>
    )
  }
}

export default Home;
