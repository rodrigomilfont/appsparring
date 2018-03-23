import axios from 'axios';
import { SET_SEARCH_TERM, ADD_API_DATA } from './actions';

export function setSearchTerm(searchTerm) {
  return {
    type: SET_SEARCH_TERM,
    payload: searchTerm,
  };
}

export function addAPIData(apiData) {
  return {
    type: ADD_API_DATA,
    payload: apiData,
  };
}

export function getAPIDetails(searchTerm) {
  return dispatch => {
    axios
      .get(`https://api.mercadolibre.com/sites/MLA/search?q=${searchTerm}`)
      // .get(`https://swapi.co/api/people/?search=${searchTerm}`)
      .then(response => {
        dispatch(addAPIData(response.data));
      })
      .catch(error => {
        console.error('axios error', error); // eslint-disable-line no-console
      });
  };
}
