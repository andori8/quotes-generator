import React, { Component } from 'react';
import ShowCategoryQuotes from '../components/ShowCategoryQuotes';
import { connect } from 'react-redux';
import { fetchCategoryQuotes } from '../actions/fetchCategoryQuotes';

class Category extends Component {

  componentDidMount() {
    this.props.fetchCategoryQuotes(this.props.match.params.id)
  }

  render() {
    return (
      <div><ShowCategoryQuotes quotes={this.props.quotes} /></div>
    )
  }
}

export default connect(state => ({quotes: state}), {fetchCategoryQuotes})(Category);
