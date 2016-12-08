// Set up your root reducer here...
 import { combineReducers } from 'redux';
 import {routerReducer} from 'react-router-redux';
 import getTracksReducer from './getTracksReducer';

 const rootReducer = combineReducers({
  routing: routerReducer,
  tracks: getTracksReducer
});

export default rootReducer;
