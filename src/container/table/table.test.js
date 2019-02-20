import React from 'react';
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer';

import Table from './table.jsx';
import ConnectedTabe from './table.jsx'
import { Provider } from 'react-redux';
import store from '../../store';

describe('<Table> component', () => {
    const wrapper = shallow(<Table />)
    test('render correctly', () => {
        expect(wrapper).toHaveLength(1)
    })
})

describe('<ConnectedTable /> redux-conneted component', () => {
    test('renders correctly', () => {
        const connectedTableWrapper = shallow(
            <Provider store={store}>
                <ConnectedTabe />
            </Provider>
        )
        expect(connectedTableWrapper).toHaveLength(1)
    })
    test('renders correctly and matched snapshot', () => {
        const tree = renderer.create(
            <Provider store={store}>
                <ConnectedTabe />
            </Provider>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
})
