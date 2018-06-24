import reducers from './reducers';

test('SET_SEARCH_TERM', () => {
  const state = reducers(
    {
      searchTerm: 'boca junior',
      resultBySearchTerm: [],
      failedSearch: false,
    },
    {
      type: 'SET_SEARCH_TERM',
      payload: 'boca juniors',
    },
  );
  expect(state).toEqual({
    searchTerm: 'boca juniors',
    resultBySearchTerm: [],
    failedSearch: false,
  });
});

test('FAILED_SEARCH', () => {
  const state = reducers(
    {
      searchTerm: 'yo',
      resultBySearchTerm: {
        yo: { isFetching: true, didInvalidate: true, items: [] },
      },
      failedSearch: false,
    },
    { type: 'FAILED_SEARCH', searchTerm: 'yo', error: 'error' },
  );
  expect(state).toEqual({
    searchTerm: 'yo',
    resultBySearchTerm: {
      yo: { isFetching: true, didInvalidate: true, items: [] },
    },
    failedSearch: { error: true, errorMsg: 'error' },
  });
});

test('REQUEST_SEARCH ', () => {
  const state = reducers(
    { searchTerm: 'boca juniors', resultBySearchTerm: [], failedSearch: false },
    { type: 'REQUEST_SEARCH', searchTerm: 'boca juniors' },
  );
  expect(state).toEqual({
    searchTerm: 'boca juniors',
    resultBySearchTerm: {
      'boca juniors': { isFetching: true, didInvalidate: true, items: [] },
    },
    failedSearch: false,
  });
});

test('RECEIVE_SEARCH ', () => {
  const state = reducers(
    {
      searchTerm: 'boca juniors receive search',
      resultBySearchTerm: [],
      failedSearch: false,
    },
    { type: 'RECEIVE_SEARCH', searchTerm: 'boca juniors' },
  );
  expect(state).toEqual({
    searchTerm: 'boca juniors',
    resultBySearchTerm: {
      'boca juniors': {
        isFetching: false,
        didInvalidate: false,
        items: [],
      },
    },
    failedSearch: false,
  });
});
