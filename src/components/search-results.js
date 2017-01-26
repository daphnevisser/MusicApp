import React from 'react';
import FontAwesome from 'react-fontawesome';

const SearchResults = (props) => {
  if (!props.search) {
    return (
      <div className="loading"></div>
    );
  }

  const listOfResults = props.search.results.map((result) => {
    return(
      <li key={result.id}>
        {result.image ? <img src={result.image} /> : <div className="placeholder">No image</div>}
        {props.radio == "tracks" ? <FontAwesome name="play-circle-o" size="lg" className="play-icon" /> : null}
        <a href="#">
          <p className="song-name">{result.name}</p>
          <p className="artist-name">{result.artist_name}</p>
        </a>
      </li>
    );
  });

  return (
    <div>
      <h3>{props.search.results == 0 ? "No results found, please try again." : "Here are your search results:"}</h3>
      <ul>
        {listOfResults}
      </ul>
    </div>
  );
};

export default SearchResults;
