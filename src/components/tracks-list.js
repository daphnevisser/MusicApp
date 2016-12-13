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
        <FontAwesome name="play-circle-o" size="lg" className="play-icon" />
        <a href="#">
          <p><span className="track-name">{track.name} </span> <br />
          <span className="track-artist">{track.artist_name}</span></p>
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
