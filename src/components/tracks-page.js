import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getTracks } from '../actions/index';
import TracksList from './tracks-list';
import Filter from './filter';

class TracksPage extends Component {
  componentDidMount() {
    this.props.getTracks("popularity_week", "pop");
  }
  render() {
    return (
      <section>
        <Filter comp="tracks"/>
        <TracksList tracks={this.props.tracks}/>
      </section>
    );
  }
}

function mapStateToProps(state) {
  return {
    tracks: state.tracks
  };
}

export default connect(mapStateToProps, {getTracks})(TracksPage);
