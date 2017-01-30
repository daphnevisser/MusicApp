import React, { Component } from 'react';
import { connect } from 'react-redux';
import { artistInfo } from '../actions/index';

class Artist extends Component {
  componentDidMount() {
    this.props.artistInfo(this.props.params.id);
  }
  render() {
    return (
      <div>
        Artist info
      </div>
    );
  }
}

export default connect(null, { artistInfo })(Artist);
