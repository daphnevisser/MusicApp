import React, { Component } from 'react';
import Navbar from './navbar';
import Player from '../containers/player';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <p className="jamendo">All content is provided by
          <a target="_blank" href="https://www.jamendo.com/"> Jamendo</a>
        </p>
        {this.props.children}
        <Player />
      </div>
    );
  }
}

App.propTypes = {
  children: React.PropTypes.element,
};

export default App;
