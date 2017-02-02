import React from 'react';
import { Link } from 'react-router';

const AlbumsList = (props) => {
  if (!props.albums) {
    return (
      <div className="loading">Loading...</div>
    );
  }

  const listOfAlbums = props.albums.results.map((album) => {
    return(
      <li key={album.id}>
        <Link to={'/album/' + album.id}>
          {album.image ? <img src={album.image} /> : <div className="placeholder">No image</div>}
        </Link>
        <div className="info">
          <Link className="album-name" to={'/album/' + album.id}>{album.name}</Link>
          <Link className="album-artist" to={'/artist/' + album.artist_id}>{album.artist_name}</Link>
        </div>
      </li>
    );
  });

  return (
    <div>
      <ul className="list-of-albums list-style">
        {listOfAlbums}
      </ul>
    </div>
  );
};

export default AlbumsList;
