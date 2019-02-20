import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import Header from './header.jsx';
import ConnectedHeader from './header.jsx'
import { Provider } from 'react-redux';
import store from '../../store'

describe('<Header> component', () => {
    const wrapper = shallow(<Header />)
    test('renders correctly', () => {
        expect(wrapper).toHaveLength(1)
    })
})
describe('<ConnectedHeader> redux-connected component', () => {
    test('renders correctly', () => {
        const connectedHeaderWrapper = shallow(
            <Provider store={store}>
                <ConnectedHeader />
            </Provider>
        )
        expect(connectedHeaderWrapper).toHaveLength(1)
    })
    test('renders correctly and matched snapshot', () => {
        const tree = renderer.create(
            <Provider store={store}>
                <ConnectedHeader />
            </Provider>
        ).toJSON()
        expect(tree).toMatchSnapshot()
    })
})
