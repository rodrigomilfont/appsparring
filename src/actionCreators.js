import axios from 'axios';
import { SET_SEARCH_TERM, REQUEST_POST, RECEIVE_POST } from './actions';

export function setSearchTerm(searchTerm) {
  return {
    type: SET_SEARCH_TERM,
    payload: searchTerm,
  };
}

export function requestPost(searchTerm) {
  return {
    type: REQUEST_POST,
    searchTerm,
  };
}

export function receivePost(searchTerm, json) {
  return {
    type: RECEIVE_POST,
    searchTerm,
    post: json,
    receiveAt: Date.now(),
  };
}

export function fetchPosts(searchTerm) {
  return dispatch => {
    dispatch(requestPost(searchTerm));
    axios
      .get(`https://api.mercadolibre.com/sites/MLA/search?q=${searchTerm}`)
      .then(response => {
        dispatch(receivePost(searchTerm, [response.data]));
      })
      .catch(error => {
        console.error('axios error', error); // eslint-disable-line no-console
      });
  };
}
