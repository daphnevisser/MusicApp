import * as types from '../constants/actionTypes';
import axios from 'axios';
import config from '../config';

const ROOT_URL = 'https://api.jamendo.com/v3.0/';
const CLIENT_ID = config.client_id;


export function getTracks(sorting, genre) {
  const request = axios.get(`${ROOT_URL}tracks/?client_id=${CLIENT_ID}&format=jsonpretty&limit=20&fuzzytags=${genre}&groupby=artist_id&boost=${sorting}&imagesize=60`);
  return {
      type: types.GET_TRACKS,
      payload: request
  };
}

export function getArtists(sorting, genre) {
  const request = axios.get(`${ROOT_URL}artists/musicinfo/?client_id=${CLIENT_ID}&format=jsonpretty&limit=20&order=${sorting}&tag=${genre}`);
  return {
      type: types.GET_ARTISTS,
      payload: request
  };
}
