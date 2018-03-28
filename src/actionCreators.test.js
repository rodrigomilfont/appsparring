import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import { setSearchTerm, requestSearch, fetchSearch } from './actionCreators';
import * as actions from './actions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const searchTerm = 'DonaGata';

it('setSearchTerm', () => {
  expect(setSearchTerm(searchTerm)).toMatchSnapshot();
});

it('fetchSearch searchTerm', () => {
  expect(fetchSearch(searchTerm)).toMatchSnapshot();
});

describe('fetchSearch action', () => {
  it('check the url in fetchSearch', done => {
    const dispatchMock = jest.fn();
    moxios.withMock(() => {
      requestSearch(searchTerm);
      fetchSearch(searchTerm)(dispatchMock);
      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request
          .respondWith({
            status: 200,
            response: 'response',
          })
          .then(() => {
            expect(request.url).toEqual(
              `https://api.mercadolibre.com/sites/MLA/search?q=${searchTerm}`,
            );
            expect(dispatchMock).toBeCalledWith(requestSearch(searchTerm));
            done();
          });
      });
    });
  });
});

describe('getPosts actions', () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it('async test fetchSearch', async done => {
    const store = mockStore({});
    const errorMsg = {
      status: 422,
      response: { message: 'ops' },
    };

    const expectedActions = [
      { type: actions.REQUEST_SEARCH, searchTerm },
      { type: actions.FAILED_SEARCH, searchTerm, error: errorMsg },
    ];

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.reject(errorMsg);
    });

    await store.dispatch(fetchSearch(searchTerm)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });

    done();
  });
});
