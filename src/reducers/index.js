// Set up your root reducer here...
 import { combineReducers } from 'redux';
 import {routerReducer} from 'react-router-redux';
 import getTracksReducer from './getTracksReducer';
 import getArtistsReducer from './getArtistsReducer';
 import getAlbumsReducer from './getAlbumsReducer';
 import searchReducer from './searchReducers';
 import getArtistInfoReducer from './getArtistInfoReducer';

 const rootReducer = combineReducers({
  routing: routerReducer,
  tracks: getTracksReducer,
  artists: getArtistsReducer,
  albums: getAlbumsReducer,
  searchResult: searchReducer,
  artistInfo: getArtistInfoReducer
});

export default rootReducer;
