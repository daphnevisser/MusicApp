// Set up your root reducer here...
 import { combineReducers } from 'redux';
 import {routerReducer} from 'react-router-redux';
 import getTracksReducer from './getTracksReducer';
 import getArtistsReducer from './getArtistsReducer';
 import getAlbumsReducer from './getAlbumsReducer';
 import searchReducer from './searchReducers';
 import getArtistInfoReducer from './getArtistInfoReducer';
 import getAlbumInfoReducer from './getAlbumInfoReducer';
 import * as player from './playerReducers';

 const rootReducer = combineReducers({
  routing: routerReducer,
  tracks: getTracksReducer,
  artists: getArtistsReducer,
  albums: getAlbumsReducer,
  searchResult: searchReducer,
  artistInfo: getArtistInfoReducer,
  albumInfo: getAlbumInfoReducer,
  currentTrack: player.setTrackReducer,
  list: player.listReducer
});

export default rootReducer;
