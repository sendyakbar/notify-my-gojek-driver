import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import TextInput from './input.jsx'

describe('<TextInput> component', () => {
    const wrapper = shallow(<TextInput />)
    test('renders correctly', () => {
        expect(wrapper).toHaveLength(1)
    })
    test('it has a div', () => {
        const divWrapper = wrapper.find('div')
        expect(divWrapper).toHaveLength(1)
    })
    test('it has a form', () => {
        const formWrapper = wrapper.find('form')
        expect(formWrapper).toHaveLength(1)
    })
    test('it has an input', () => {
        const inputWrapper = wrapper.find('input')
        expect(inputWrapper).toHaveLength(1)
    })
    test('renders correctly and matched snapshot', () => {
        const tree = renderer.create(<TextInput />).toJSON()
        expect(tree).toMatchSnapshot()
    })
})