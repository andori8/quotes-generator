import React, { Component } from 'react';
import { RadioGroup, RadioButton } from 'react-radio-buttons';

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
          <input id="text" type="text" onChange={this.handleChange} value={this.state.text} placeholder="Quote" />
          <input id="author" type="text" onChange={this.handleChange} value={this.state.author} placeholder="Author" />
          <RadioGroup id ="category_id" onChange={this.handleCategory} horizontal>
            <RadioButton value="1">Motivation</RadioButton>
            <RadioButton value="2">Funny</RadioButton>
            <RadioButton value="3">Sports</RadioButton>
            <RadioButton value="4">Love</RadioButton>
          </RadioGroup>
          <input type="submit" className="submit-button" value="Submit" />
        </form>
      </div>
    )
  }

}

export default AddQuote;
