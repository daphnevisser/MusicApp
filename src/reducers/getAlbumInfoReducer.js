import { GET_ALBUM_INFO } from '../constants/actionTypes';

export default function getAlbumInfoReducer (state = null, action) {
    switch (action.type) {
        case GET_ALBUM_INFO:
        console.log(action.payload.data);
            return action.payload.data;
    }
    return state;
}
