import React from 'react';
import { Link, IndexLink } from 'react-router';
import FontAwesome from 'react-fontawesome';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <IndexLink to="/" activeClassName="selected">
          <FontAwesome name="music" size="2x" className="nav-icon" />Tracks
          </IndexLink>
        </li>
        <li>
          <Link to="/artists" activeClassName="selected">
          <FontAwesome name="id-badge" size="2x" className="nav-icon" />Artists
          </Link>
        </li>
        <li>
          <Link to="/albums" activeClassName="selected">
          <FontAwesome name="star" size="2x" className="nav-icon" />Albums
          </Link>
        </li>
        <li>
          <Link to="/search" activeClassName="selected">
          <FontAwesome name="search" size="2x" className="nav-icon" />Search
          </Link>
        </li>
        <li>
          <Link to="/queue" activeClassName="selected">
          <FontAwesome name="list" size="2x" className="nav-icon" />Queue
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
