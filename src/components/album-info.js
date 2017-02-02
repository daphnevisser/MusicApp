import React from 'react';
import FontAwesome from 'react-fontawesome';
import { Link } from 'react-router';

const AlbumInfo = (props) => {
  if (!props.albumInfo) {
    return (
      <div className="loading">Loading...</div>
    );
  }

  const album = props.albumInfo.results[0];
  const tracks = album.tracks.map((track) => {
    return (
      <li key={track.id}>
        <FontAwesome name="play" size="lg" className="simple-play-icon" />
        <div className="info">
          <p className="track-name">{track.name}</p>
        </div>
      </li>
    );
  });

  return (
    <section className="album">
      <div className="album-name">
        {album.image ? <img src={album.image} /> : <div className="placeholder">No image</div>}
        <h3>{album.name}</h3>
        <Link className="artist-name" to={'/artist/' + album.artist_id}>{album.artist_name}</Link>
      </div>
      <p className="releasedate">Releasedate: {album.releasedate}</p>
      <ul className="album-tracks">
        {tracks}
      </ul>
    </section>
  );
};

export default AlbumInfo;
