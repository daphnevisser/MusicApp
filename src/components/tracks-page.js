import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getTracks } from '../actions/index';
import TracksList from './tracks-list';

class TracksPage extends Component {
  componentDidMount() {
    this.props.getTracks();
  }
  render() {
    return (
      <TracksList tracks={this.props.tracks}/>
    );
  }
}

function mapStateToProps(state) {
  return {
    tracks: state.tracks
  };
}

export default connect(mapStateToProps, {getTracks})(TracksPage);
