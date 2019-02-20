import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import Button from './button.jsx'

describe('<Button> component', () => {
    const wrapper = shallow(<Button />)
    test('renders correctly', () => {
        expect(wrapper).toHaveLength(1)
    })
    test('it has a div', () => {
        const divWrapper = wrapper.find('div')
        expect(divWrapper).toHaveLength(1)
    })
    test('it has a button', () => {
        const buttonWrapper = wrapper.find('button')
        expect(buttonWrapper).toHaveLength(1)
    })
    test('renders correctly and matched snapshot', () => {
        const tree = renderer.create(<Button />).toJSON()
        expect(tree).toMatchSnapshot()
    })
})