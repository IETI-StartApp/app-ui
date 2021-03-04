import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import React from 'react';
import Navigation from '../../../components/Navbar/Navigation';

describe('Testing navigation', () => {

    const wrapper = shallow(<Navigation />)

    test('should load navigation ', () => {
        expect(wrapper).toMatchSnapshot();
    })
})
