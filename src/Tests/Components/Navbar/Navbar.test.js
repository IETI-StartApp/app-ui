import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import React from 'react';
import Navbar from '../../../components/Navbar/Navbar'

describe('Testing navbar', () => {

    const wrapper = shallow(<Navbar />)

    test('should load navbar ', () => {
        expect(wrapper).toMatchSnapshot();
    })
    
})
