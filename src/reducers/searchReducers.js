import { SEARCH_ALBUMS, SEARCH_TRACKS, SEARCH_ARTISTS, CLEAR_RESULTS } from '../constants/actionTypes';

export default function searchReducer (state = null, action) {
    switch (action.type) {
        case SEARCH_ARTISTS:
            return action.payload.data;
        case SEARCH_TRACKS:
            return action.payload.data;
        case SEARCH_ALBUMS:
            return action.payload.data;
        case CLEAR_RESULTS:
            return null;
    }
    return state;
}
