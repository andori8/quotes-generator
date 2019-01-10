import React, { Component } from 'react';

class ShowCategoryQuotes extends Component {
  state = {
    idx: 0
  }

  handleClick = () => {
    this.setState({
      idx: this.state.idx + Math.floor(Math.random() * (this.props.quotes.length - this.state.idx))
    })
    console.log(this.state.idx)
  }

  render() {
    const {quotes} = this.props
    if (quotes.length !== 0) {
    return (
      <div>
        {quotes[this.state.idx].blurb}
        <button onClick={this.handleClick}>Next</button>
      </div>
    )} else {
      return <div>loading</div>
    }
  }
}

export default ShowCategoryQuotes;
