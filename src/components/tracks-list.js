import React from 'react';
import FontAwesome from 'react-fontawesome';

const TracksList = (props) => {
  if (!props.tracks) {
    return (
      <div className="loading">Loading...</div>
    );
  }

  const listOfTracks = props.tracks.results.map((track) => {
    return(
      <li key={track.id}>
        <a href="#">
          <FontAwesome name="play-circle-o" size="lg" className="play-icon" />
          <span className="track-name">{track.name} - </span>
          <span className="track-artist">{track.artist_name}</span>
        </a>
      </li>
    );
  });

  return (
    <div>
      <ul className="list-of-tracks">
        {listOfTracks}
      </ul>
    </div>
  );
};

export default TracksList;
