import React, { Component } from 'react';
import Home from './components/Home';
import AddQuote from './components/AddQuote';
import Category from './components/Category';
import Random from './components/Random';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={Home}/>
          <Route exact path="/create" component={AddQuote}/>
          <Route exact path="/random" component={Random}/>
          <Route exact path="/categories/:id" component={Category}/>
        </div>
      </Router>
    );
  }
}

export default App;
