import React, { Component } from 'react';

class ShowRandomQuote extends Component {

  handleClick = () => {
    this.props.fetchQuote()
  }

  render() {
    const { quote } = this.props
    if (Object.keys(quote) !== 0) {
  return (
    <div className="container">
      <div className="quote-show">
        <h1>{quote.blurb}</h1><br />
        <h1>-{quote.contributor}</h1><br />
        <button onClick={this.handleClick}>Randomize</button>
      </div>
    </div>
  )} else {
    return <div>loading</div>
  }
}
}

export default ShowRandomQuote;
