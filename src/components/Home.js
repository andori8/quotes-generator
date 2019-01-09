import React, { Component } from 'react';
import AddQuote from './AddQuote';
import { connect } from 'react-redux';
import { addQuote } from '../actions/addQuote';

class Home extends Component {

  render() {
    return (
      <div>
      <AddQuote addQuote={this.props.addQuote} />
      </div>
    )
  }
}

export default connect(null, {addQuote})(Home);
