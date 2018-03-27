import { combineReducers } from 'redux';
import {
  SET_SEARCH_TERM,
  REQUEST_SEARCH,
  RECEIVE_SEARCH,
  FAILED_SEARCH,
} from './actions';

const DEFAULT_STATE = {
  searchTerm: '',
  error: false,
};

const searchTerm = (state = DEFAULT_STATE.searchTerm, action) => {
  if (action.type === SET_SEARCH_TERM) {
    return action.payload;
  }
  return state;
};

const failedSearch = (state = DEFAULT_STATE.error, action) => {
  if (action.type === FAILED_SEARCH) {
    return Object.assign({}, state, {
      error: true,
      errorMsg: action.error,
    });
  }
  return state;
};

function searchs(
  state = {
    isFetching: false,
    didInvalidate: false,
    items: [],
  },
  action,
) {
  switch (action.type) {
    case REQUEST_SEARCH:
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: true,
      });

    case RECEIVE_SEARCH:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        items: action.results,
        lastUpdate: action.receiveAt,
      });

    case FAILED_SEARCH:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        error: action.error,
      });

    default:
      return state;
  }
}

function resultBySearchTerm(state = [], action) {
  switch (action.type) {
    case REQUEST_SEARCH:
    case RECEIVE_SEARCH:
      return Object.assign({}, state, {
        [action.searchTerm]: searchs(state[action.searchTerm], action),
      });
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  searchTerm,
  resultBySearchTerm,
  failedSearch,
});

export default rootReducer;
