import React, { Component } from 'react';
import Navbar from './navbar';
import Player from '../containers/player';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        {this.props.children}
        <Player />
      </div>
    );
  }
}

export default App;
