import { GET_ARTIST_INFO } from '../constants/actionTypes';

export default function getArtistInfoReducer (state = null, action) {
    switch (action.type) {
        case GET_ARTIST_INFO:
        console.log(action.payload.data);
            return action.payload.data;
    }
    return state;
}
