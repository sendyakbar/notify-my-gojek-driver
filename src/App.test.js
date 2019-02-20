import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import App from './App';

describe('<App> component', () => {
  const wrapper = shallow(<App />)
  test('renders correctly', () => {
    expect(wrapper).toHaveLength(1)
  })
  test('it has a Provider', () => {
    const wrapperProvider = wrapper.find('Provider')
    expect(wrapperProvider).toHaveLength(1)
  })
  test('it has a div', () => {
    const wrapperDiv = wrapper.find('div')
    expect(wrapperDiv).toHaveLength(1)
  })
  test('it renders correctly and matched snapshot', () => {
    const tree = renderer.create(<App />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})