import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import React from 'react';
import {ProjectsGrid} from "../../../components";

describe('Testing projects grid', () => {

    const wrapper = shallow(<ProjectsGrid/>)

    test('should load CardProject', () => {
        expect(wrapper).toMatchSnapshot();
    })

})
