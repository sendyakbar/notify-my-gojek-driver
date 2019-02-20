import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import Modal from './modal.jsx';

describe('<Modal> component', () => {
    const wrapper = shallow(<Modal />)
    test('render correctly', () => {
        expect(wrapper).toHaveLength(1)
    })
    test('it has message state', () => {
        const messageState = wrapper.state('message')
        expect(messageState).toBeDefined()
    })
    test('it has 3 divs', () => {
        const wrapperDiv = wrapper.find('div')
        expect(wrapperDiv).toHaveLength(3)
    })
    test('it has a paragraph', () => {
        const wrapperP = wrapper.find('p')
        expect(wrapperP).toHaveLength(1)
    })
    test('renders correctly and matched snapshot', () => {
        const tree = renderer.create(<Modal />).toJSON()
        expect(tree).toMatchSnapshot()
    })
})