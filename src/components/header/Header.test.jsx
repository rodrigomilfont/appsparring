import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import sinon from 'sinon';
import Header from './Header';
import HeaderSearch from '../../containers/header/HeaderSearch';

Enzyme.configure({ adapter: new Adapter() });

it('renders without crashing', ()=> {
  const wrapper = shallow(<Header/>);
  expect(wrapper).toMatchSnapshot();
});

it('change search term', ()=> {
  const onSearchTermChange = sinon.spy();
  const wrapper = shallow(<HeaderSearch onSearchTermChange={onSearchTermChange} />);

  wrapper.find('input').simulate('change', { target: { value: "changed by test" } })

  expect(onSearchTermChange.calledOnce).toEqual(true);
});

it('submit to history', ()=> {
  const wrapper = shallow(<HeaderSearch />)
  wrapper.setState({ searchTerm: "searchTermByTest" })
  wrapper.find('form').simulate('submit', { preventDefault () {} })
  //TODO Test history
});

