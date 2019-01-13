import React, { Component } from 'react';

class ShowCategoryQuotes extends Component {
  state = {
    idx: 0
  }

  handleClick = () => {
    this.setState({
      idx: Math.floor(Math.random() * this.props.quotes.length)
    })
  }

  render() {
    const {quotes} = this.props
    if (quotes.length !== 0) {
    return (
      <div className="container">
        <div className="quote-show">
          <h1>"{quotes[this.state.idx].blurb}"</h1><br />
          <h1>-{quotes[this.state.idx].contributor}</h1><br />
          <button onClick={this.handleClick}>Randomize</button>
        </div>
      </div>
    )} else {
      return <div>loading</div>
    }
  }
}

export default ShowCategoryQuotes;
