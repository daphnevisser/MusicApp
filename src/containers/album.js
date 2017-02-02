import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAlbumInfo } from '../actions/index';
import AlbumInfo from '../components/album-info';

class Album extends Component {
  componentDidMount() {
    this.props.getAlbumInfo(this.props.params.id);
  }
  render() {
    return (
      <div>
        <AlbumInfo albumInfo={this.props.albumInfo} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    albumInfo: state.albumInfo
  };
}

export default connect(mapStateToProps, { getAlbumInfo })(Album);
