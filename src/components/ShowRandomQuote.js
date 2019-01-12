import React, { Component } from 'react';

class ShowRandomQuote extends Component {

  handleClick = () => {
    this.props.fetchQuote()
  }

  render() {
  return (
    <div>
      <h1>{this.props.quote.blurb}</h1>
      <button onClick={this.handleClick}>Randomize</button>
    </div>
  )
  }
}

export default ShowRandomQuote;
