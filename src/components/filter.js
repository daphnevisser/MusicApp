import React, {Component} from 'react';
import { connect } from 'react-redux';
import { getTracks, getArtists } from '../actions/index';

class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = {valueSorting: 'popularity_week', valueGenre: "indie"};

    this.handleSortingChange = this.handleSortingChange.bind(this);
    this.handleGenreChange = this.handleGenreChange.bind(this);
  }

  handleSortingChange(event) {
    this.setState({valueSorting: event.target.value});
    this.sendAction();
  }

  handleGenreChange(event) {
    this.setState({valueGenre: event.target.value});
    this.sendAction();
  }

  sendAction() {
    switch (this.props.comp) {
      case "tracks":
        this.props.getTracks(this.state.valueSorting, this.state.valueGenre);
        break;
      case "artists":
        this.props.getArtists(this.state.valueSorting, this.state.valueGenre);
        break;
    }
  }

  render() {
    return (
      <section className="filter">
        <form>
          <p>Popular </p>
          <select value={this.state.valueSorting} onChange={this.handleSortingChange}>
            <option value="popularity_week">this week</option>
            <option value="popularity_month">this month</option>
            <option value="popularity_total">total</option>
          </select>
          <p> in </p>
          <select value={this.state.valueGenre} onChange={this.handleGenreChange}>
            <option value="classical">classical</option>
            <option value="country">country</option>
            <option value="electronic">electronic</option>
            <option value="funk">funk</option>
            <option value="hiphop">hiphop</option>
            <option value="house">house</option>
            <option value="indie">indie</option>
            <option value="jazz">jazz</option>
            <option value="metal">metal</option>
            <option value="pop">pop</option>
            <option value="reggae">raggae</option>
            <option value="rock">rock</option>
            <option value="rnb">rnb</option>
          </select>
        </form>
      </section>
    );
  }
}

export default connect(null, {getTracks, getArtists})(Filter);
