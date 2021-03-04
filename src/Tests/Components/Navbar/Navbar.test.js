import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import React from 'react';
import Navbar from '../../../components/Navbar/Navbar';
import { IconButton } from '@material-ui/core';

describe('Testing navbar', () => {

    const handleDrawerToggle = jest.fn();

    const wrapper = shallow(<Navbar handleDrawerToggle={handleDrawerToggle}/>)

    test('should load navbar ', () => {
        expect(wrapper).toMatchSnapshot();
    })

    test('should call handleDrawerToggle function', () => {
        const iconButton = wrapper.find(IconButton).at(0);
        iconButton.simulate("Click");
        expect( handleDrawerToggle ).toHaveBeenCalled();
    })
    
})
