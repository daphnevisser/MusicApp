import React from 'react';
import { Link } from 'react-router';
import FontAwesome from 'react-fontawesome';

const SearchResults = (props) => {
  if (!props.search) {
    return (
      <div className="loading" />
    );
  }

  const listOfResults = props.search.results.map((result) => {
    switch (props.radio) {
      case "tracks":
        return (
          <li key={result.id}>
            {result.image ? <img src={result.image} /> : <div className="placeholder">No image</div>}
            <FontAwesome name="play-circle-o" size="lg" className="play-icon"
              onClick={() => props.setTrack(result)} title="Play song" />
            <div className="info">
              <p className="song-name" onClick={() => props.setTrack(result)}>{result.name}</p>
              <Link className="artist-name" to={'/artist/' + result.artist_id}>{result.artist_name}</Link>
            </div>
            <FontAwesome className="add-button"
                onClick={() => props.addTrack(result)}
                name="plus"
                size="lg"
                title="Add to queue" />
          </li>
        );
      case "albums":
        return (
          <li key={result.id}>
            <Link to={'/album/' + result.id}>
              {result.image ? <img src={result.image} /> : <div className="placeholder">No image</div>}
            </Link>
            <div className="info">
              <Link className="album-name" to={'/album/' + result.id}>{result.name}</Link>
              <Link className="artist-name" to={'/artist/' + result.artist_id}>{result.artist_name}</Link>
            </div>
          </li>
        );
      case "artists":
        return (
          <li key={result.id}>
            <Link to={'/artist/' + result.id}>
              {result.image ? <img src={result.image} /> : <div className="placeholder">No image</div>}
              <div className="info sp">
                <p className="song-name">{result.name}</p>
              </div>
          </Link>
          </li>
        );
    }
  });

  return (
    <div>
      <h3>{props.search.results == 0 ? "No results found, please try again." : "Here are your search results:"}</h3>
      <ul className="list-style">
        {listOfResults}
      </ul>
    </div>
  );
};

export default SearchResults;
