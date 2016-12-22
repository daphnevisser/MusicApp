import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAlbums } from '../actions/index';
import AlbumsList from '../components/albums-list';

class AlbumsPage extends Component {
  componentDidMount() {
    this.props.getAlbums();
  }
  render() {
    return (
      <section>
        <AlbumsList albums={this.props.albums}/>
      </section>
    );
  }
}

function mapStateToProps(state) {
  return {
    albums: state.albums
  };
}

export default connect(mapStateToProps, {getAlbums})(AlbumsPage);
