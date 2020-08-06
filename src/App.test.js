import React from 'react';
import renderer from 'react-test-renderer';
import { MenuItem } from './header/header';
import { InfoView } from './info_view';
import { LogInView } from './login_view';

it('renders header menu item correctly', () => {
  const tree = renderer.create(<MenuItem title='test' link='/test'/>).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders info view correctly', () => {
  const tree = renderer.create(<InfoView />).toJSON();
  expect(tree).toMatchSnapshot();
})

it('renders login view correctly', () => {
  const tree = renderer.create(<LogInView />).toJSON();
  expect(tree).toMatchSnapshot();
})