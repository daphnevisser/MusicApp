import { GET_TRACKS } from '../constants/actionTypes';

export default function getTracksReducer (state = null, action) {
    switch (action.type) {
        case GET_TRACKS:
        console.log(action.payload.data);
            return action.payload.data;
    }
    return state;
}
