import React, { Component } from 'react';
import './App.css';
import InitialComponent from './components/InitialComponent';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <InitialComponent />
      </div>
    );
  }
}