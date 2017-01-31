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
        <FontAwesome name="play-circle-o" size="lg" className="play-icon" />
        <div className="info">
          <p className="track-name">{track.name}</p>
          <Link className="track-artist" to={'/artist/' + track.artist_id}>{track.artist_name}</Link>
        </div>
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

export default TracksList;
