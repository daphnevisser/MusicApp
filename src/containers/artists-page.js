import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getArtists } from '../actions/index';
import ArtistsList from '../components/artists-list';
import Filter from '../components/filter';

class ArtistsPage extends Component {
  componentDidMount() {
    this.props.getArtists("popularity_week", "indie");
  }
  render() {
    return (
      <section>
        <Filter comp="artists"/>
        <ArtistsList artists={this.props.artists}/>
      </section>
    );
  }
}

ArtistsPage.propTypes = {
  getArtists: React.PropTypes.func,
  artists: React.PropTypes.object
};

function mapStateToProps(state) {
  return {
    artists: state.artists
  };
}

export default connect(mapStateToProps, {getArtists})(ArtistsPage);
