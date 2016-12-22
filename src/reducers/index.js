// Set up your root reducer here...
 import { combineReducers } from 'redux';
 import {routerReducer} from 'react-router-redux';
 import getTracksReducer from './getTracksReducer';
 import getArtistsReducer from './getArtistsReducer';

 const rootReducer = combineReducers({
  routing: routerReducer,
  tracks: getTracksReducer,
  artists: getArtistsReducer
});

export default rootReducer;
