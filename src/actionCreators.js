import axios from 'axios';
import { SET_SEARCH_TERM, REQUEST_SEARCH, RECEIVE_SEARCH } from './actions';

export function setSearchTerm(searchTerm) {
  return {
    type: SET_SEARCH_TERM,
    payload: searchTerm,
  };
}

export function requestSearch(searchTerm) {
  return {
    type: REQUEST_SEARCH,
    searchTerm,
  };
}

export function receiveSearch(searchTerm, json) {
  return {
    type: RECEIVE_SEARCH,
    searchTerm,
    results: json,
    receiveAt: Date.now(),
  };
}

export function fetchSearch(searchTerm) {
  return dispatch => {
    dispatch(requestSearch(searchTerm));
    axios
      .get(`https://api.mercadolibre.com/sites/MLA/search?q=${searchTerm}`)
      .then(response => {
        dispatch(receiveSearch(searchTerm, [response.data]));
      })
      .catch(error => {
        console.error('axios error', error); // eslint-disable-line no-console
      });
  };
}
