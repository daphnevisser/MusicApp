import { GET_ALBUMS } from '../constants/actionTypes';

export default function getArtistsReducer (state = null, action) {
    switch (action.type) {
        case GET_ALBUMS:
        console.log(action.payload.data);
            return action.payload.data;
    }
    return state;
}
