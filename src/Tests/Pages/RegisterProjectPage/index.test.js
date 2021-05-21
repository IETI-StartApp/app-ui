import '@testing-library/jest-dom';
import {shallow} from 'enzyme';
import React from 'react';
import {Fab} from '@material-ui/core';
import {RegisterProjectPage} from '../../../pages/RegisterProjectPage/index';

describe('Testing register page', () => {
    const wrapper = shallow(<RegisterProjectPage testing/>);

    test('should render register page', () => {
        expect(wrapper).toMatchSnapshot();
    })

    const handlePrev = jest.fn();
    test('should rclick', () => {
        const nextButton = wrapper.find(Fab).at(0);
        nextButton.simulate('click');
        expect(handlePrev).toHaveBeenCalledTimes(0);
    });
    test('should rclick', () => {
        const nextButton = wrapper.find(Fab).at(0);
        nextButton.simulate('click');
        nextButton.simulate('click');
        expect(handlePrev).toHaveBeenCalledTimes(0);
    });
    test('should rclick', () => {
        const nextButton = wrapper.find(Fab).at(0);
        nextButton.simulate('click');
        nextButton.simulate('click');
        nextButton.simulate('click');
        expect(handlePrev).toHaveBeenCalledTimes(0);
    })

})
