import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer'

import TextArea from './textArea.jsx'

describe('<TextArea> component', () => {
    const wrapper = shallow(<TextArea />)
    test('renders correctly', () => {
        expect(wrapper).toHaveLength(1)
    })
    test('it has a div', () => {
        const divWrapper = wrapper.find('div')
        expect(divWrapper).toHaveLength(1)
    })
    test('it has textarea', () => {
        const textareaWrapper = wrapper.find('textarea')
        expect(textareaWrapper).toHaveLength(1)
    })
    test('renders correctly and matched snapshot', () => {
        const tree = renderer.create(<TextArea />).toJSON()
        expect(tree).toMatchSnapshot()
    })
})