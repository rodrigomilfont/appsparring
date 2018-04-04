import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import * as api from './api';

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument(api)),
    typeof window === 'object' &&
    typeof window.devToolsExtension !== 'undefined'
      ? window.devToolsExtension()
      : f => f,
  ),
);

export default store;
