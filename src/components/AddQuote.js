import React, { Component } from 'react';
import { RadioGroup, RadioButton } from 'react-radio-buttons';
import { connect } from 'react-redux';
import { addQuote } from '../actions/addQuote';

class AddQuote extends Component {
  state = {
    text: '',
    author: '',
    category_id: ''
  }

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleCategory = e => {
    this.setState({
      category_id: e
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.addQuote(this.state)
    this.setState({ text: '', author: '', category_id: ''})
  }

  render() {
    return (
      <div className="add-quote">
        <form onSubmit={this.handleSubmit}>
          <div className="quote"><input id="text" type="text" onChange={this.handleChange} value={this.state.text} placeholder="Quote" /></div><br />
          <div className="author"><input id="author" type="text" onChange={this.handleChange} value={this.state.author} placeholder="Author" /></div><br />
          <RadioGroup id ="category_id" onChange={this.handleCategory} horizontal>
            <RadioButton rootColor="black" value="1">Motivation</RadioButton>
            <RadioButton rootColor="black" value="2">Funny</RadioButton>
            <RadioButton rootColor="black" value="3">Sports</RadioButton>
            <RadioButton rootColor="black" value="4">Love</RadioButton>
          </RadioGroup><br /><br />
          <input type="submit" className="submit-button" value="Submit" />
        </form>
      </div>
    )
  }

}

export default connect(null, {addQuote})(AddQuote);
