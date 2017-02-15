import React, { Component } from 'react';
import Navbar from './navbar';
import Player from '../containers/player';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <p className="jamendo" target="_blank">All songs are provided by
          <a href="https://www.jamendo.com/"> Jamendo</a>
        </p>
        {this.props.children}
        <Player />
      </div>
    );
  }
}

export default App;
