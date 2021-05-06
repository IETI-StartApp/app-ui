import '@testing-library/jest-dom';
import {shallow} from 'enzyme';
import React from 'react';
import {ProjectsItems} from "../../../components";

describe('Testing projects grid', () => {

    const wrapper = shallow(<ProjectsItems
        projects={[
            {
                name: "a",
                image: "a",
                finance: {}
            },
            {
                name: "a",
                image: "a",
                finance: {}
            },
            {
                name: "a",
                image: "a",
                finance: {}
            }]}/>)

    test('should load CardProject', () => {
        expect(wrapper).toMatchSnapshot();
    })

})
