import * as types from '../constants/actionTypes';
import axios from 'axios';
import config from '../config';

const ROOT_URL = 'https://api.jamendo.com/v3.0/';
const CLIENT_ID = config.client_id;


export function getTracks(sorting, genre) {
  const request = axios.get(`${ROOT_URL}tracks/?client_id=${CLIENT_ID}&format=jsonpretty&limit=20&fuzzytags=${genre}&groupby=artist_id&boost=${sorting}`);
  return {
      type: types.GET_TRACKS,
      payload: request
  };
}
