import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Home from './Home';
import Header from '../header/Header.jsx';
import HeaderSearch from '../../containers/header/HeaderSearch';

Enzyme.configure({ adapter: new Adapter() });

it('renders Home', () => {
  const wrapper = shallow(<Home />);
  expect(wrapper.find('.footer').length).toEqual(1);
});

it('example of debug use', () => {
  const wrapper = shallow(<Home />);
  console.log(wrapper.find('.footer').debug());
});

it('check if header component is instanced', () => {
  const wrapper = shallow(<Home />);
  expect(wrapper.find(Header).length).toEqual(1);
});

it('set state test', () => {
  const wrapper = shallow(
    <BrowserRouter>
      <Home searchTerm="initial value" />
    </BrowserRouter>,
  );
  wrapper.setProps({ searchTerm: 'value set by test' });
  wrapper.update();

  console.log(': ', wrapper.debug());
  // FIX
});

it('simulate click', () => {
  const wrapper = shallow(<HeaderSearch />);
  expect(wrapper).toMatchSnapshot();
  wrapper.find('.bt-search').simulate('click');
  expect(wrapper).toMatchSnapshot();
});
