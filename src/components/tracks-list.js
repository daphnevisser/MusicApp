import React from 'react';
import FontAwesome from 'react-fontawesome';

const TracksList = (props) => {
  const createListOfTracks = () => {
    const tracks = props.tracks.results;
    console.log(tracks);
    return tracks.map((track) => {
      return(
        <li key={track.id}>
          <a href="#">
            <FontAwesome name="play-circle-o" size="lg" className="play-icon" />
            <span className="track-name">{track.name}</span>
            <span className="track-artist">{track.artist_name}</span>
          </a>
        </li>
      );
    });
  };
  if (!props.tracks) {
    return (
      <div className="loading">Loading...</div>
    );
  }
  return (
    <div>
      Tracklist
      <ul>
        {createListOfTracks()}
      </ul>
    </div>
  );
};

export default TracksList;
