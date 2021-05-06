import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import React from 'react';
import ProgressGraph from "../../../../src/components/ProjectItems/ProgressGraph";
import { Typography } from '@material-ui/core';

describe('Testing progress graph', () => {

    const wrapper = shallow(<ProgressGraph progress={0.5}/>)

    test('should load ProgressGraph', () => {
        expect(wrapper).toMatchSnapshot();
    })

    test('should load tipography with a number before "%" ', () => {

        const progressPercentage = wrapper.find(Typography).at(0).text();
        expect(progressPercentage.length).toBeGreaterThanOrEqual(2);
        expect(progressPercentage.length).toBeLessThanOrEqual(4);
        expect (progressPercentage).toContain("%");

        const number = progressPercentage.substring(0, progressPercentage.length - 1);
        expect(number).not.toBeNaN();

    })

    test('should load tipography with a valid percentage', () => {
        const progressPercentage = wrapper.find(Typography).at(0).text();
        const number = progressPercentage.substring(0, progressPercentage.length - 1);
        expect(parseFloat(number)).toBeGreaterThanOrEqual(0);
        expect(parseFloat(number)).toBeLessThanOrEqual(100);
    })

})
