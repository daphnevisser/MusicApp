import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAlbumInfo, addAlbum, setTrack, addTrack } from '../actions/index';
import AlbumInfo from '../components/album-info';

class Album extends Component {
  componentDidMount() {
    this.props.getAlbumInfo(this.props.params.id);
  }
  render() {
    return (
      <div>
        <AlbumInfo albumInfo={this.props.albumInfo} addAlbum={this.props.addAlbum}
          setTrack={this.props.setTrack} addTrack={this.props.addTrack} />
      </div>
    );
  }
}

Album.propTypes = {
  getAlbumInfo: React.PropTypes.func,
  addAlbum: React.PropTypes.func,
  setTrack: React.PropTypes.func,
  addTrack: React.PropTypes.func,
  albumInfo: React.PropTypes.object,
  params: React.PropTypes.object
};

function mapStateToProps(state) {
  return {
    albumInfo: state.albumInfo
  };
}

export default connect(mapStateToProps, { getAlbumInfo, addAlbum, setTrack, addTrack })(Album);
