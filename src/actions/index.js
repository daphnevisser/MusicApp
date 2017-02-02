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

// Search actions

export function searchTracks(value) {
  const request = axios.get(`${ROOT_URL}tracks/${CLIENT_ID}${FORMAT}&limit=20&namesearch=${value}&imagesize=60`);
  return {
      type: types.SEARCH_TRACKS,
      payload: request
  };
}

export function searchArtists(value) {
  const request = axios.get(`${ROOT_URL}artists/${CLIENT_ID}${FORMAT}&limit=20&namesearch=${value}`);
  return {
      type: types.SEARCH_ARTISTS,
      payload: request
  };
}

export function searchAlbums(value) {
  const request = axios.get(`${ROOT_URL}albums/${CLIENT_ID}${FORMAT}&limit=20&namesearch=${value}&imagesize=60`);
  return {
      type: types.SEARCH_ALBUMS,
      payload: request
  };
}

// Detail pages actions

export function getArtistInfo(id) {
  const request = axios.get(`${ROOT_URL}artists/tracks/${CLIENT_ID}${FORMAT}&id=${id}&imagesize=60`);
  return {
      type: types.GET_ARTIST_INFO,
      payload: request
  };
}

export function getAlbumInfo(id) {
  const request = axios.get(`${ROOT_URL}albums/tracks/${CLIENT_ID}${FORMAT}&id=${id}&imagesize=60`);
  return {
      type: types.GET_ALBUM_INFO,
      payload: request
  };
}
