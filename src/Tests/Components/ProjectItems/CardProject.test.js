import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import React from 'react';
import CardProject from "../../../../src/components/ProjectItems/CardProject";
import { Typography, CardHeader, CardMedia } from '@material-ui/core';

describe('Testing card project', () => {

    const wrapper = shallow(<CardProject/>)

    test('should load CardProject', () => {
        expect(wrapper).toMatchSnapshot();
    })

    test ('should load a valid Card Header', () => {
        const cardHeader = wrapper.find(CardHeader).at(0);

        expect(cardHeader.props().title).toBeDefined();
        expect(cardHeader.props().subheader).toBeDefined();
        expect(cardHeader.props().avatar).toBeDefined();

        expect(cardHeader.props().title).not.toEqual("");
        expect(cardHeader.props().subheader).not.toEqual("");
    })

    test ('should load the project image', () => {
        const image = wrapper.find(CardMedia).at(0).props().image;
        expect(image).toBeDefined();
        expect(image).not.toEqual("");
    })

    test ('should load a valids Typographys', () => {
        const projectName = wrapper.find(Typography).at(0).text();
        expect(projectName).toBeDefined();
        expect(projectName).not.toEqual("");

        const returnPercentage  = wrapper.find(Typography).at(1).text().split("%")[0];
        expect(returnPercentage).not.toBeNaN();
        expect(parseFloat(returnPercentage)).toBeGreaterThanOrEqual(0);
        expect(parseFloat(returnPercentage)).toBeLessThanOrEqual(100);
        
        const fObjective  = wrapper.find(Typography).at(2).text().split(" Meta")[0];
        expect(fObjective).not.toBeNaN();

        const financed  = wrapper.find(Typography).at(4).text();
        expect(financed.substring(4, financed.length - 1)).not.toBeNaN();
        expect(parseFloat(financed.substring(4, financed.length - 1))).toBeGreaterThan(0);

        const partners  = wrapper.find(Typography).at(7).text();
        expect(partners).not.toBeNaN();
        expect(parseFloat(partners)).toBeGreaterThanOrEqual(0);
    })


})