import React from 'react';
import { Link } from 'react-router';
import FontAwesome from 'react-fontawesome';

const SearchResults = (props) => {
  if (!props.search) {
    return (
      <div className="loading"></div>
    );
  }

  const listOfResults = props.search.results.map((result) => {
    switch (props.radio) {
      case "tracks":
        return (
          <li key={result.id}>
            {result.image ? <img src={result.image} /> : <div className="placeholder">No image</div>}
            <FontAwesome name="play-circle-o" size="lg" className="play-icon" />
            <div className="info">
              <p className="song-name">{result.name}</p>
              <Link className="artist-name" to={'/artist/' + result.artist_id}>{result.artist_name}</Link>
            </div>
          </li>
        );
      case "albums":
        return (
          <li key={result.id}>
            {result.image ? <img src={result.image} /> : <div className="placeholder">No image</div>}
            <div className="info">
              <Link className="album-name" to={'/album/' + result.id}>{result.name}</Link>
              <Link className="artist-name" to={'/artist/' + result.artist_id}>{result.artist_name}</Link>
            </div>
          </li>
        );
      case "artists":
        return (
          <li key={result.id}>
            {result.image ? <img src={result.image} /> : <div className="placeholder">No image</div>}
            <div className="info sp">
              <Link className="song-name" to={'/artist/' + result.artist_id}>{result.name}</Link>
            </div>
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
