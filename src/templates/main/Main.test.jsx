import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import Main from './Main';
import Home from '../../components/home/Home';
import ComposeLayoutRoute from '../composeLayoutRoute';

Enzyme.configure({ adapter: new Adapter() });

it('renders Main', () => {
  const wrapper = shallow(
    <ComposeLayoutRoute exact path="/" layout={Main} component={Home} />,
  );
  expect(wrapper).toMatchSnapshot();
});

it('render MainLayout', () => {
  const wrapper = shallow(
    <Main>
      <div className="class-intern-main" />
    </Main>,
  );
  expect(wrapper.find('.class-intern-main').length).toEqual(1);
  // console.log(wrapper.debug());
  expect(wrapper).toMatchSnapshot();
});
