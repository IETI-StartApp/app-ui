import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import React from 'react';
import { EntrepreneurDashboard } from '../../../components/EntrepreneurDashboard/index';
import { Fab } from '@material-ui/core/';

describe('Testing Entrepreneur Dashboard', () => {

    const wrapper = shallow(<EntrepreneurDashboard />)

    test('should load Entrepreneur Dashboard', () => {
        expect(wrapper).toMatchSnapshot();
    });


    test('should call handleDrawerToggle function', () => {
        const iconButton = wrapper.find(Fab).at(0);
        iconButton.simulate("Click");
    });
})
