import React, { Component } from 'react';
import ShowRandomQuote from '../components/ShowRandomQuote';
import { connect } from 'react-redux';
import { fetchRandomQuote } from '../actions/fetchRandomQuote';

class Random extends Component {

  componentDidMount() {
    this.props.fetchRandomQuote()
  }

  render() {
    if (Object.keys(this.props.quote).length !== 0) {
    return (
      <div>
        <ShowRandomQuote fetchQuote={this.props.fetchRandomQuote} quote={this.props.quote} />
      </div>
    )
    } else {
      return <div>loading</div>
    }
  }
}

export default connect(state => ({quote: state}), {fetchRandomQuote})(Random);
