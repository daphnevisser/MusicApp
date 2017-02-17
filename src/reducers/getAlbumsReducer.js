import { GET_ALBUMS } from '../constants/actionTypes';

export default function getArtistsReducer (state = null, action) {
    switch (action.type) {
        case GET_ALBUMS:
            return action.payload.data;
    }
    return state;
}
