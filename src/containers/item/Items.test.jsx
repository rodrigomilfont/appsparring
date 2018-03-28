import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import store from '../../store';
import { setSearchTerm, fetchSearch, failedSearch } from '../../actionCreators';
import Items,  { Unwrapped as UnwrappedItems } from '../../containers/item/Items'

Enzyme.configure({ adapter: new Adapter() });

it('renders without crashing', () => {
  const wrapper = shallow(<UnwrappedItems />);
  expect(wrapper).toMatchSnapshot();
});

it('change search term', () => {
  const searchTerm = 'Goku';
  store.dispatch(setSearchTerm(searchTerm));
  store.dispatch(failedSearch(searchTerm, "ERROR"));

  const wrapper = mount(
    <Provider store={store}>
      <MemoryRouter>
        <Items />
      </MemoryRouter>
    </Provider>,
  );

  // console.log(wrapper.debug());
  expect(wrapper.find('input').props().value).toEqual(searchTerm);
  expect(wrapper.find('.error').length).toEqual(1);
});
