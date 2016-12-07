import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router';
import FontAwesome from 'react-fontawesome';

class Navbar extends Component {
  constructor() {
    super();
    this.state = {activeTab: 1};
    this.handleTabClick = this.handleTabClick.bind(this);
  }

  handleTabClick(tab) {
    this.setState({activeTab: tab});
  }

  render() {
    return (
      <nav>
        <ul>
          <li>
            <IndexLink to="/" className={(this.state.activeTab === 1) ? "selected nav-link" : "nav-link"} onClick={() => this.handleTabClick(1)}>
            <FontAwesome name="music" size="2x" className="nav-icon" />Tracks
            </IndexLink>
          </li>
          <li>
            <Link to="/artists" className={(this.state.activeTab === 2) ? "selected nav-link" : "nav-link"} onClick={() => this.handleTabClick(2)}>
            <FontAwesome name="star" size="2x" className="nav-icon" />Artists
            </Link>
          </li>
          <li>
            <Link to="/albums" className={(this.state.activeTab === 3) ? "selected nav-link" : "nav-link"} onClick={() => this.handleTabClick(3)}>
            <FontAwesome name="id-badge" size="2x" className="nav-icon" />Album
            </Link>
          </li>
          <li>
            <Link to="/search" className={(this.state.activeTab === 4) ? "selected nav-link" : "nav-link"} onClick={() => this.handleTabClick(4)}>
            <FontAwesome name="search" size="2x" className="nav-icon" />Search
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
