import { GET_ARTIST_INFO } from '../constants/actionTypes';

export default function getArtistInfoReducer (state = null, action) {
    switch (action.type) {
        case GET_ARTIST_INFO:
            return action.payload.data;
    }
    return state;
}
