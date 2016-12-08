import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getTracks } from '../actions/index';

class TracksPage extends Component {
  componentDidMount() {
    this.props.getTracks();
  }
  render() {
    return (
      <div>TracksPage</div>
    );
  }
}

export default connect(null, {getTracks})(TracksPage);
