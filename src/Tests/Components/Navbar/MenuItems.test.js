import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import React from 'react';
import MenuItems from '../../../components/Navbar/MenuItems';
import { ListItemText } from '@material-ui/core';

describe('Testing menu items', () => {

    const wrapper = shallow(<MenuItems userType="Entrepreneur"/>);
    const wrapper2 = shallow(<MenuItems userType="Investor"/>);

    test('should load menu items', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('should load investor items', () => {
        expect(wrapper.find(ListItemText).at(0).prop('primary')).toBe('Nuevo proyecto');
        expect(wrapper.find(ListItemText).at(1).prop('primary')).toBe('Mis proyectos');
        expect(wrapper.find(ListItemText).at(2).prop('primary')).toBe('Buscar proyectos');
        expect(wrapper.find(ListItemText).at(3).prop('primary')).toBe('Comunicarse con un asesor');
    });

    test('should load entrepreneur items', () => {
        expect(wrapper2.find(ListItemText).at(0).prop('primary')).toBe('Mis inversiones');
        expect(wrapper2.find(ListItemText).at(1).prop('primary')).toBe('Buscar proyectos');
        expect(wrapper2.find(ListItemText).at(2).prop('primary')).toBe('Proyectos guardados');
        expect(wrapper2.find(ListItemText).at(3).prop('primary')).toBe('Comunicarse con un asesor');
    });
})

