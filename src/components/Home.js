import React, { Component } from 'react';
import AddQuote from './AddQuote';

class Home extends Component {

  render() {
    return (
      <div>
      <AddQuote addQuote={this.addQuote} />
      </div>
    )
  }
}

export default Home;
