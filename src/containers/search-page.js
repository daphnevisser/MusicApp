import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import { connect } from 'react-redux';
import { searchAlbums, searchArtists, searchTracks } from '../actions/index';
import SearchResults from '../components/search-results';
import _ from 'lodash';

class SearchPage extends Component {
  constructor(props) {
    super(props);
    this.state = {term: '', radio: 'tracks'};
    this.onInputChange = this.onInputChange.bind(this);
    this.onRadioChange = this.onRadioChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    this.setState({term: event.target.value});
    const debouncedAction = _.debounce(() => this.sendAction(), 800);
    debouncedAction();
  }
  onRadioChange(event) {
    this.setState({radio: event.target.value});
    this.setState({term: ''});
  }
  onFormSubmit(event) {
    event.preventDefault();
    this.sendAction();
  }
  sendAction() {
    switch (this.state.radio) {
      case "tracks":
        this.props.searchTracks(this.state.term);
        break;
      case "artists":
        this.props.searchArtists(this.state.term);
        break;
      case "albums":
        this.props.searchAlbums(this.state.term);
        break;
    }
  }

  render() {
    return (
      <section className="search-page">
        <form onSubmit={this.onFormSubmit} className="searchbar">
          <FontAwesome name="search" size="lg" className="nav-icon" />
          <input
            value={this.state.term}
            onChange={this.onInputChange}
            placeholder="Write a song, album or artist.."/>
        </form>
        <form className="options">
          <input type="radio" name="options" value="tracks"
            onChange={this.onRadioChange}
            checked={this.state.radio === "tracks"} />tracks
          <input type="radio" name="options" value="artists"
            onChange={this.onRadioChange}
            checked={this.state.radio === "artists"} />artists
          <input type="radio" name="options" value="albums"
            onChange={this.onRadioChange}
            checked={this.state.radio === "albums"} />albums
        </form>
        <div className="search-results">
          <SearchResults search={this.props.searchResult} radio={this.state.radio} />
        </div>
      </section>
    );
  }
}

function mapStateToProps(state) {
  return {
    searchResult: state.searchResult
  };
}

export default connect(mapStateToProps, {searchAlbums, searchArtists, searchTracks})(SearchPage);
