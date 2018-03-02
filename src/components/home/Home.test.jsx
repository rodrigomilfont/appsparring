import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
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

it('check if header component is instanced', () => {
  const wrapper = shallow(<Home />);
  expect(wrapper.find(Header).length).toEqual(1);
});

it('set state test', () => {
  const wrapper = mount(
    <BrowserRouter>
      <Home searchTerm="initial value" />
    </BrowserRouter>,
  );
  const header = wrapper.find(Header);
  wrapper.setProps({ searchTerm: 'value set by test' });
  // console.log('wrapper: ', wrapper.debug());
  wrapper.update();
  // console.log('wrapper: ', wrapper.html());
});
