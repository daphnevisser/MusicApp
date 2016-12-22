import * as types from '../constants/actionTypes';
import axios from 'axios';
import config from '../config';

const ROOT_URL = 'https://api.jamendo.com/v3.0/';
const CLIENT_ID = `?client_id=${config.client_id}`;
const FORMAT = '&format=jsonpretty';


export function getTracks(sorting, genre) {
  const request = axios.get(`${ROOT_URL}tracks/${CLIENT_ID}${FORMAT}&limit=20&fuzzytags=${genre}&groupby=artist_id&boost=${sorting}&imagesize=60`);
  return {
      type: types.GET_TRACKS,
      payload: request
  };
}

export function getArtists(sorting, genre) {
  const request = axios.get(`${ROOT_URL}artists/musicinfo/${CLIENT_ID}${FORMAT}&limit=20&order=${sorting}&tag=${genre}`);
  return {
      type: types.GET_ARTISTS,
      payload: request
  };
}

export function getAlbums(sorting, genre) {
  const request = axios.get(`${ROOT_URL}albums/musicinfo/${CLIENT_ID}${FORMAT}&limit=20&order=${sorting}&tag=${genre}&imagesize=60`);
  return {
      type: types.GET_ALBUMS,
      payload: request
  };
}
