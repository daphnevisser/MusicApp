import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getTracks, setTrack, addTrack } from '../actions/index';
import TracksList from '../components/tracks-list';
import Filter from '../components/filter';

class TracksPage extends Component {
  componentDidMount() {
    this.props.getTracks("popularity_week", "indie");
  }
  render() {
    return (
      <section>
        <Filter comp="tracks"/>
        <TracksList tracks={this.props.tracks} setTrack={this.props.setTrack} addTrack={this.props.addTrack}/>
      </section>
    );
  }
}

TracksPage.propTypes = {
  getTracks: React.PropTypes.func,
  setTrack: React.PropTypes.func,
  addTrack: React.PropTypes.func,
  tracks: React.PropTypes.object
};

function mapStateToProps(state) {
  return {
    tracks: state.tracks
  };
}

export default connect(mapStateToProps, {getTracks, setTrack, addTrack})(TracksPage);
