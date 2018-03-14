import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import SearchLayout from './templates/search/Search';
import App from './App';

Enzyme.configure({ adapter: new Adapter() });

it('renders without crashing', () => {
  const wrapper = shallow(
    <SearchLayout>
      <div className="unique" />
    </SearchLayout>,
  );

  expect(wrapper).toMatchSnapshot();
});

it('render App', () => {
  const wrapper = shallow(<App />);

  // console.log(wrapper.debug());
  expect(wrapper).toMatchSnapshot();
});
