import { ARTIST_INFO } from '../constants/actionTypes';

export default function artistInfoReducer (state = null, action) {
    switch (action.type) {
        case ARTIST_INFO:
        console.log(action.payload.data);
            return action.payload.data;
    }
    return state;
}
