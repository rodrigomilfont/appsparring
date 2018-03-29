import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import Items from './Items';

Enzyme.configure({ adapter: new Adapter() });

it('Items component ', () => {
  const wrapper = shallow(<Items />);
	expect(wrapper).toMatchSnapshot();
});
