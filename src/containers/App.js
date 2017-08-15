import React, { Component } from 'react';
import logo from '../logo.svg';
import Paper from 'material-ui/Paper';
import PaperHome from '../components/PaperHome.js'
import profilepic from '../images/profile.jpg';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
      <PaperHome/>
      
      </div>
      );
  }
}

export default App;