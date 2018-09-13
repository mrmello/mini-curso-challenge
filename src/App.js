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

  loadData(){
    this.setState({
      serial: Serials,
      selectedSerial: Serials[0]
    })
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

            {/* <SerialList onSerialSelect={selectedSerial => this.setState({selectedSerial})}
                        serial={this.state.Serials} /> */}
          </div>      
        </div>
    );
  }
}

export default App;
