import React, { Component } from 'react';
import { connect } from 'react-redux';
import { clearList, replayList, setTrack } from '../actions';
import FontAwesome from 'react-fontawesome';

class Queue extends Component {
  listItems() {
    return this.props.list.list.map(track => {
      return (
        <li key={track.id} onClick={() => this.props.setTrack(track)}>
          <FontAwesome className="simple-play-icon" name="play" size="lg" />
          <p className="track-name">{track.name}</p>
        </li>
      );
    });
  }

  render() {
    if (!this.props.list) {
      return <div />;
    }
    return (
      <section className="queue">
        <div>
          <button className="default-button" onClick={() => this.props.clearList()}>Clear queue</button>
          <button className="default-button" onClick={() => this.props.replayList()}>Play again</button>
        </div>
        <ul className="queue-list">{this.listItems()}</ul>
      </section>
    );
  }
}

Queue.propTypes = {
    clearList: React.PropTypes.func,
    setTrack: React.PropTypes.func,
    replayList: React.PropTypes.func,
    list: React.PropTypes.object
};

function mapStateTopProps(state) {
  return {
    list: state.list
  };
}

export default connect(mapStateTopProps, {clearList, replayList, setTrack})(Queue);
