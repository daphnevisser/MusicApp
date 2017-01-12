import { SEARCH_ALBUMS, SEARCH_TRACKS, SEARCH_ARTISTS } from '../constants/actionTypes';

export default function searchReducer (state = null, action) {
    switch (action.type) {
        case SEARCH_ARTISTS:
        console.log(action.payload.data);
            return action.payload.data;
        case SEARCH_TRACKS:
            console.log(action.payload.data);
            return action.payload.data;
        case SEARCH_ALBUMS:
            console.log(action.payload.data);
            return action.payload.data;
    }
    return state;
}
