import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';


class Navbar extends Component {
  render() {
    return (
      <nav>
        <ul>
          <li><FontAwesome name="music" size="2x" className="nav-icon" />Tracks</li>
          <li><FontAwesome name="star" size="2x" className="nav-icon" />Albums</li>
          <li><FontAwesome name="id-badge" size="2x" className="nav-icon" />Artists</li>
          <li><FontAwesome name="search" size="2x" className="nav-icon" />Search</li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
