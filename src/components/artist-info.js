import React from 'react';
import FontAwesome from 'react-fontawesome';

const ArtistInfo = (props) => {
  if (!props.artistInfo) {
    return (
      <div className="loading">Loading...</div>
    );
  }
  const artist = props.artistInfo.results[0];
  const tracks = artist.tracks.map((track) => {
    return (
      <li key={track.id}>
        <img src={track.album_image} />
        <FontAwesome name="play-circle-o" size="lg" className="play-icon" />
        <div className="info">
          <p className="track-name">{track.name}</p>
        </div>
      </li>
    );
  });

  return (
    <section className="artist">
      <div className="artist-name">
        <img src={artist.image} />
        <h3>{artist.name}</h3>
      </div>
      <ul className="list-style">
        {tracks}
      </ul>
    </section>
  );
};

export default ArtistInfo;
