import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAlbums } from '../actions/index';
import AlbumsList from '../components/albums-list';
import Filter from '../components/filter';

class AlbumsPage extends Component {
  componentDidMount() {
    this.props.getAlbums("popularity_week", "indie");
  }
  render() {
    return (
      <section>
        <Filter comp="albums"/>
        <AlbumsList albums={this.props.albums}/>
      </section>
    );
  }
}

AlbumsPage.propTypes = {
  getAlbums: React.PropTypes.func,
  albums: React.PropTypes.object
};

function mapStateToProps(state) {
  return {
    albums: state.albums
  };
}

export default connect(mapStateToProps, {getAlbums})(AlbumsPage);
