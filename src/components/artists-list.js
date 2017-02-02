import React from 'react';
import { Link } from 'react-router';

const ArtistsList = (props) => {
  if (!props.artists) {
    return (
      <div className="loading">Loading...</div>
    );
  }

  const listOfArtists = props.artists.results.map((artist) => {
    return(
      <li key={artist.id}>
        <Link className="artist-li" to={'/artist/' + artist.id}>
          {artist.image ? <img src={artist.image} /> : <div className="placeholder">No image</div>}
          <div className="info">
            <p className="artist-name">{artist.name}</p>
          </div>
        </Link>
      </li>
    );
  });

  return (
    <div>
      <ul className="list-of-artists list-style">
        {listOfArtists}
      </ul>
    </div>
  );
};

export default ArtistsList;
