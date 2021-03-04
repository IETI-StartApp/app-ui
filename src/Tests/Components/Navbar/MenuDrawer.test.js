import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import React from 'react';
import MenuDrawer from '../../../components/Navbar/MenuDrawer';
import { Drawer } from '@material-ui/core/';

describe('Testing menu drawer', () => {

    const handleDrawerToggle = jest.fn();

    const wrapper = shallow(<MenuDrawer open={true} onClose={handleDrawerToggle}/>)

    test('should load menu drawer', () => {
        expect(wrapper).toMatchSnapshot();
    })

    test('should call handleDrawerToggle function', () => {
        const drawer = wrapper.find(Drawer).at(0);
        drawer.simulate("Close");
        expect( handleDrawerToggle ).toHaveBeenCalled();
    })
    
})
