import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getArtistInfo, addTrack, setTrack } from '../actions/index';
import ArtistInfo from '../components/artist-info';

class Artist extends Component {
  componentDidMount() {
    this.props.getArtistInfo(this.props.params.id);
  }
  render() {
    return (
      <div>
        <ArtistInfo artistInfo={this.props.artistInfo} addTrack={this.props.addTrack} setTrack={this.props.setTrack} />
      </div>
    );
  }
}

Artist.propTypes = {
  getArtistInfo: React.PropTypes.func,
  addTrack: React.PropTypes.func,
  setTrack: React.PropTypes.func,
  params: React.PropTypes.object,
  artistInfo: React.PropTypes.object
};

function mapStateToProps(state) {
  return {
    artistInfo: state.artistInfo
  };
}

export default connect(mapStateToProps, { getArtistInfo, addTrack, setTrack })(Artist);
