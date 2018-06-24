import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import store from '../../store';
import { setSearchTerm } from '../../store/search/actionCreators';
import HeaderSearch, {
  Unwrapped as UnwrappedHeaderSearch,
} from '../../containers/header/HeaderSearch';

Enzyme.configure({ adapter: new Adapter() });

function setup() {
  const wrapper = mount(
    <Provider store={store}>
      <MemoryRouter>
        <HeaderSearch />
      </MemoryRouter>
    </Provider>,
  );
  return {
    wrapper,
  };
}

describe('Unwrapped', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<UnwrappedHeaderSearch />);
    expect(wrapper).toMatchSnapshot();
  });
});

describe('Connected HeaderSearch', () => {
  const searchTerm = 'Goku';

  it('change search term', () => {
    store.dispatch(setSearchTerm(searchTerm));

    const { wrapper } = setup();
    expect(wrapper.find('input').props().value).toEqual(searchTerm);
  });
});

describe('Change events', () => {
  const fakeEvents = jest.fn();
  const wrapper = shallow(
    <UnwrappedHeaderSearch handleSearchTermChange={fakeEvents} />,
  );

  wrapper.find('input').simulate('change');
  // console.log('fakeEvents: ', fakeEvents.mock.calls);
  // console.log(wrapper.debug());
  // console.log('wrapper.props(): ', wrapper.find('input').props());
});
