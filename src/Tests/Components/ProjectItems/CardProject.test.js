import '@testing-library/jest-dom';
import {shallow} from 'enzyme';
import React from 'react';
import CardProject from "../../../../src/components/ProjectItems/CardProject";
import {CardHeader, CardMedia, Typography} from '@material-ui/core';

describe('Testing card project', () => {

    const wrapper = shallow(<CardProject project={{
        "country": "CO",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lacus laoreet non curabitur gravida. Vel turpis nunc eget lorem. Commodo sed egestas egestas fringilla. Est placerat in egestas erat.",
        "finance": {
            "value": 10000,
            "investorNumber": 1,
            "valuation": 50000,
            "minimumInvestment": 1,
            "startDate": {"$date": "2019-02-16T05:00:00.000Z"},
            "endDate": {"$date": "2019-02-16T05:00:00.000Z"}
        },
        "image": "https://images.unsplash.com/photo-1619537765439-1469ac26014a?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80",
        "name": "Beach & talk",
        "video": "https://youtu.be/hCrJTLdmkHo"
    }}/>)

    test('should load CardProject', () => {
        expect(wrapper).toMatchSnapshot();
    })

    test('should load a valid Card Header', () => {
        const cardHeader = wrapper.find(CardHeader).at(0);

        expect(cardHeader.props().title).toBeDefined();
        expect(cardHeader.props().subheader).toBeDefined();
        expect(cardHeader.props().avatar).toBeDefined();

        expect(cardHeader.props().title).not.toEqual("");
        expect(cardHeader.props().subheader).not.toEqual("");
    })

    test('should load the project image', () => {
        const image = wrapper.find(CardMedia).at(0).props().image;
        expect(image).toBeDefined();
        expect(image).not.toEqual("");
    })

    test('should load a valids Typographys', () => {
        const projectName = wrapper.find(Typography).at(0).text();
        expect(projectName).toBeDefined();
        expect(projectName).not.toEqual("");

        const fObjective = wrapper.find(Typography).at(2).text().split(" Meta")[0];
        expect(fObjective).not.toBeNaN();

        const financed = wrapper.find(Typography).at(4).text();
        expect(financed.substring(4, financed.length - 1)).not.toBeNaN();
        expect(parseFloat(financed.substring(4, financed.length - 1))).toBeNaN()
    })

})
