import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import Footer from './footer.jsx'

describe('<Footer> component', () => {
    const wrapper = shallow(<Footer />)
    test('renders correctly', () => {
        expect(wrapper).toHaveLength(1)
    })
    test('it has a footer', () => {
        const footerWrapper = wrapper.find('footer')
        expect(footerWrapper).toHaveLength(1)
    })
    test('it has a div', () => {
        const divWrapper = wrapper.find('div')
        expect(divWrapper).toHaveLength(1)
    })
    test('it renders correct and matched snapshot', () => {
        const tree = renderer.create(<Footer />).toJSON()
        expect(tree).toMatchSnapshot()
    })
})