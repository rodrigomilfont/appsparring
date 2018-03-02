import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import Home from './Home';

import Header from '../header/Header';

Enzyme.configure({ adapter: new Adapter() });

it('renders Home', () => {
  const wrapper = shallow(<Home />);
  expect(wrapper.find('.footer').length).toEqual(1);
});

it('example of debug use', () => {
  const wrapper = shallow(<Home />);
  console.log(wrapper.find('.footer').debug());
});

it('check if header', () => {
  const wrapper = shallow(<Home />);
  // expect(wrapper)
  console.log(': ', wrapper.find(Header).debug());
});
