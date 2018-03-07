import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import SearchLayout from './templates/search/Search';

Enzyme.configure({ adapter: new Adapter() });

it('renders without crashing', () => {
  const wrapper = shallow(
    <SearchLayout>
      <div className="unique" />
    </SearchLayout>,
  );
  expect(wrapper).toMatchSnapshot();
});
