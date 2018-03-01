import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import SearchLayout from './templates/search/Search';
import Home from './components/home/Home';

Enzyme.configure({ adapter: new Adapter() });

it('renders without crashing', () => {
  const wrapper = shallow(
    <SearchLayout>
      <div className="unique" />
    </SearchLayout>,
  );
  expect(wrapper).toMatchSnapshot();
});

it('renders Home', () => {
  const wrapper = shallow(<Home />);
  expect(wrapper.find('.footer').length).toEqual(1);
});

it('example of debug use', () => {
  const wrapper = shallow(<Home />);
  console.log(wrapper.find('.footer').debug());
});
