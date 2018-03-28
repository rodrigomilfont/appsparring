import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import store from '../../store';
import {
  setSearchTerm,
  failedSearch,
  requestSearch,
} from '../../actionCreators';
import Items, {
  Unwrapped as UnwrappedItems,
} from '../../containers/item/Items';

Enzyme.configure({ adapter: new Adapter() });

function setup() {
  const wrapper = mount(
    <Provider store={store}>
      <MemoryRouter>
        <Items />
      </MemoryRouter>
    </Provider>,
  );
  return {
    wrapper,
  };
}

describe('Unwrapped', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<UnwrappedItems />);
    expect(wrapper).toMatchSnapshot();
  });
});

describe('Connected Items', () => {
  const searchTerm = 'Goku';

  it('change search term', () => {
    store.dispatch(setSearchTerm(searchTerm));

    const { wrapper } = setup();
    expect(wrapper.find('input').props().value).toEqual(searchTerm);
  });

  it('failedSearch test', () => {
    store.dispatch(failedSearch(searchTerm, 'ERROR'));

    const { wrapper } = setup();
    expect(wrapper.find('.error').length).toEqual(1);
  });

  // #bug mount enzyme https://github.com/airbnb/enzyme/issues/1229
  // xit('requestSearch test', () => {
  //   store.dispatch(requestSearch(searchTerm));
  //   const { wrapper } = setup();
  //
  //   expect(wrapper.find('.loading').length).toEqual(1);
  // });
});
