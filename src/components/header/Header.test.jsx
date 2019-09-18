import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import store from '../../store';
import { setSearchTerm } from '../../store/search/actionCreators';
import Header from './Header';
import HeaderSearch from '../../containers/header/HeaderSearch';

Enzyme.configure({ adapter: new Adapter() });

it('renders without crashing', () => {
  const wrapper = shallow(<Header />);
  expect(wrapper).toMatchSnapshot();
});

it('change search term', () => {
  const searchWord = 'New York';
  store.dispatch(setSearchTerm(searchWord));

  const wrapper = mount(
    <Provider store={store}>
      <MemoryRouter>
        <HeaderSearch />
      </MemoryRouter>
    </Provider>,
  );

  // console.log(wrapper.debug());
  expect(wrapper.find('input').props().value).toEqual(searchWord);
});
