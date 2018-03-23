import { combineReducers } from 'redux';
import { SET_SEARCH_TERM, ADD_API_DATA, REQUEST_POST } from './actions';

const DEFAULT_STATE = {
  searchTerm: '',
  apiData: {},
};

const apiData = (state = DEFAULT_STATE.apiData, action) => {
  if (action.type === ADD_API_DATA) {
    return Object.assign({}, state, action.payload);
  }

  return state;
};

const searchTerm = (state = DEFAULT_STATE.searchTerm, action) => {
  if (action.type === SET_SEARCH_TERM) {
    return action.payload;
  }
  return state;
};

const requestPost = (state = [], action) => {
  if (action.type === REQUEST_POST) {
    return Object.assign({}, state, action.payload);
  }

  return state;
};

const rootReducer = combineReducers({ searchTerm, apiData, requestPost });

export default rootReducer;
