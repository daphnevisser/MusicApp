// Set up your root reducer here...
 import { combineReducers } from 'redux';
 import {routerReducer} from 'react-router-redux';
 import getTracksReducer from './getTracksReducer';
 import getArtistsReducer from './getArtistsReducer';
 import getAlbumsReducer from './getAlbumsReducer';
 import searchReducer from './searchReducers';

 const rootReducer = combineReducers({
  routing: routerReducer,
  tracks: getTracksReducer,
  artists: getArtistsReducer,
  albums: getAlbumsReducer,
  searchResult: searchReducer
});

export default rootReducer;
