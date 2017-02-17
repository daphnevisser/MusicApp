import React from 'react';
import FontAwesome from 'react-fontawesome';
import { Link } from 'react-router';

const TracksList = (props) => {
  if (!props.tracks) {
    return (
      <div className="loading">Loading...</div>
    );
  }

  const listOfTracks = props.tracks.results.map((track) => {
    return(
      <li key={track.id}>
        <img src={track.image} />
        <FontAwesome name="play-circle-o" size="lg" className="play-icon"
          onClick={() => props.setTrack(track)} title="Play song" />
        <div className="info">
          <p className="track-name" onClick={() => props.setTrack(track)}>{track.name}</p>
          <Link className="track-artist" to={'/artist/' + track.artist_id}>{track.artist_name}</Link>
        </div>
        <FontAwesome className="add-button"
          onClick={() => props.addTrack(track)}
          name="plus"
          size="lg"
          title="Add to queue" />
      </li>
    );
  });

  return (
    <div>
      <ul className="list-of-tracks list-style">
        {listOfTracks}
      </ul>
    </div>
  );
};

TracksList.propTypes = {
  tracks: React.PropTypes.object
};

export default TracksList;
