import React, { Component } from 'react';
import Home from './components/Home';
import AddQuote from './containers/AddQuote';
import Category from './containers/Category';
import Random from './containers/Random';
import Navbar from './components/Navbar';
import ThankYou from './components/ThankYou';
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
          <Route exact path="/thank-you" component={ThankYou} />
        </div>
      </Router>
    );
  }
}

export default App;
