import React, { Component } from 'react';
import Home from './components/Home';
import AddQuote from './components/AddQuote';
import ShowQuote from './components/ShowQuote';
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
          <Route exact path="/categories/:id" component={ShowQuote}/>
        </div>
      </Router>
    );
  }
}

export default App;
