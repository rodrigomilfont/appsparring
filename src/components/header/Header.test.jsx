import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import sinon from 'sinon';
import Header from './Header';

Enzyme.configure({ adapter: new Adapter() });

it('renders without crashing', ()=> {
  const wrapper = shallow(<Header/>);
  // console.log(wrapper.debug())
  expect(wrapper).toMatchSnapshot();
});

it('change search term', ()=> {
  const onSearchTermChange = sinon.spy();
  const wrapper = shallow(<Header onSearchTermChange={onSearchTermChange} />);

  wrapper.find('input').simulate('change', { target: { value: "changed by test" } })
  
  expect(onSearchTermChange.calledOnce).toEqual(true);
});

it('submit to history', ()=> {
  const wrapper = shallow(<Header />)
  wrapper.setState({ searchTerm: "searchTermByTest" })
  wrapper.find('form').simulate('submit', { preventDefault () {} })
  //TODO Test history
});

