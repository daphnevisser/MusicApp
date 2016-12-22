import { GET_ARTISTS } from '../constants/actionTypes';

export default function getArtistsReducer (state = null, action) {
    switch (action.type) {
        case GET_ARTISTS:
        console.log(action.payload.data);
            return action.payload.data;
    }
    return state;
}
