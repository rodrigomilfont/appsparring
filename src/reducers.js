import { combineReducers } from 'redux';
import { SET_SEARCH_TERM, REQUEST_POST, RECEIVE_POST } from './actions';

const DEFAULT_STATE = {
  searchTerm: '',
};

const searchTerm = (state = DEFAULT_STATE.searchTerm, action) => {
  if (action.type === SET_SEARCH_TERM) {
    return action.payload;
  }
  return state;
};

function posts(
  state = {
    isFetching: false,
    didInvalidate: false,
    items: [],
  },
  action,
) {
  switch (action.type) {
    case REQUEST_POST:
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: true,
      });

    case RECEIVE_POST:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        items: action.post,
        lastUpdate: action.receiveAt,
      });

    default:
      return state;
  }
}

function postBySearchTerm(state = [], action) {
  switch (action.type) {
    case REQUEST_POST:
    case RECEIVE_POST:
      return Object.assign({}, state, {
        [action.searchTerm]: posts(state[action.searchTerm], action),
      });
    default:
      return state;
  }
}

const rootReducer = combineReducers({ searchTerm, postBySearchTerm });

export default rootReducer;
