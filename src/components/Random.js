import React, { Component } from 'react';
import ShowRandomQuote from './ShowRandomQuote';
import { connect } from 'react-redux';
import { fetchRandomQuote } from '../actions/fetchRandomQuote';

class Random extends Component {

  componentDidMount() {
    this.props.fetchRandomQuote()
  }

  render() {
    return (
      <div>
        <ShowRandomQuote quote={this.props.quote} />
      </div>
    )
  }
}

export default connect(state => ({quote: state}), {fetchRandomQuote})(Random);
