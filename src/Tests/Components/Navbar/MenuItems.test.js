import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import React from 'react';
import MenuItems from '../../../components/Navbar/MenuItems';

describe('Testing menu items', () => {

    const wrapper = shallow(<MenuItems />)

    test('should load menu items', () => {
        expect(wrapper).toMatchSnapshot();
    })
    
})
