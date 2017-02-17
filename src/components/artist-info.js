import React from 'react';
import FontAwesome from 'react-fontawesome';

const ArtistInfo = (props) => {
  if (!props.artistInfo) {
    return (
      <div className="loading">Loading...</div>
    );
  }
  if (!props.artistInfo.results[0]) {
    return (
      <div className="unavailable">
        <p>The selected artist currently has no available content</p>
          <FontAwesome name="frown-o" size="lg" className="sad" />
      </div>
    );
  }
  const artist = props.artistInfo.results[0];
  const tracks = artist.tracks.map((track) => {
    return (
      <li key={track.id}>
        <img src={track.album_image} />
        <FontAwesome name="play-circle-o" size="lg" className="play-icon"
          onClick={() => props.setTrack(track)} title="Play song" />
        <div className="info">
          <p className="track-name" onClick={() => props.setTrack(track)}>{track.name}</p>
        </div>
        <FontAwesome className="add-button"
            onClick={() => props.addTrack(track)}
            name="plus"
            size="lg"
            title="Add to queue" />
      </li>
    );
  });

  return (
    <section className="artist">
      <div className="artist-name">
        {artist.image ? <img src={artist.image} /> : <div className="placeholder">No image</div>}
        <h3>{artist.name}</h3>
      </div>
      <div className="join-website">
        <p className="joindate">Joindate: {artist.joindate}</p>
        <a href={artist.website} target="_blank" className="website">{artist.website ? "Official website" : null}</a>
      </div>
      <ul className="list-style">
        {tracks}
      </ul>
    </section>
  );
};

ArtistInfo.propTypes = {
  artistInfo: React.PropTypes.object,
};

export default ArtistInfo;
