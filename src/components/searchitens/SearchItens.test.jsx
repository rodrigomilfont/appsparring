import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import SearchItens from './SearchItens';

Enzyme.configure({ adapter: new Adapter() });

it('render Search Itens', () => {
  const searchs = [
    {
      title: 'Hello',
      id: 0,
      thumbnail: 'url',
      stop_time: '2037-12-30T04:00:00.000Z',
    },
  ];

  const wrapper = shallow(<SearchItens searchs={searchs} />);
  expect(wrapper).toMatchSnapshot();
});
