import {
  SET_SEARCH_TERM,
  REQUEST_SEARCH,
  RECEIVE_SEARCH,
  FAILED_SEARCH,
} from './actions';

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

export function failedSearch(searchTerm, error) {
  return {
    type: FAILED_SEARCH,
    searchTerm,
    error,
  };
}

export function fetchSearch(searchTerm) {
  return (dispatch, getState, api) => {
    dispatch(requestSearch(searchTerm));
    return api
      .fetchSearch(searchTerm)
      .then(api.checkStatus)
      .then(response => {
        dispatch(receiveSearch(searchTerm, response.data));
      })
      .catch(error => {
        dispatch(failedSearch(searchTerm, error));
      });
  };
}
