import React from 'react';

const AlbumsList = (props) => {
  if (!props.albums) {
    return (
      <div className="loading">Loading...</div>
    );
  }

  const listOfAlbums = props.albums.results.map((album) => {
    return(
      <li key={album.id}>
        {album.image ? <img src={album.image} /> : <div className="placeholder">No image</div>}
        <a href="#">
          <p className="album-name">{album.name}</p>
          <p className="album-artist">{album.artist_name}</p>
        </a>
      </li>
    );
  });

  return (
    <div>
      <ul className="list-of-albums">
        {listOfAlbums}
      </ul>
    </div>
  );
};

export default AlbumsList;
