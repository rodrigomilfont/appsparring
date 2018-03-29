import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Provider } from 'react-redux';
import React from 'react';
import { Switch, MemoryRouter } from 'react-router-dom';
import store from '../store';
import ComposeLayoutRoute from './composeLayoutRoute';
import Home from '../components/home/Home';
import MainLayout from './main/Main';

Enzyme.configure({ adapter: new Adapter() });

it('ComposeLayoutRoute with MainLayout', () => {
  const wrapper = mount(
    <Provider store={store}>
      <MemoryRouter>
        <Switch>
          <ComposeLayoutRoute component={Home} layout={MainLayout} />
        </Switch>
      </MemoryRouter>
    </Provider>,
  );
  expect(wrapper.find(MainLayout).length).toEqual(1);
});
