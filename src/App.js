import React, { Component } from 'react';
import './App.css';
import Serials from './data/serials.json'
import Avatar from './components/avatar'
import SerialDetail from './components/serialDetail'
import SerialList from './components/serialList'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      selectedSerial: null
    };
  }

  render() {
    return (
        <div>
          <div className="header">
            <h1 className="titulo">React Challenge</h1>
            <Avatar />
          </div>
          <div>
            <SerialDetail serial={this.state.selectedSerial} />
            <SerialList onSerialSelect={selectedSerial => this.setState({selectedSerial})}
                        serials = {Serials} />
          </div>      
        </div>
    );
  }
}

export default App;
