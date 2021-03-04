import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import React from 'react';
import ProjectsGrid from "../../../../src/components/ProjectItems/ProjectsGrid";

describe('Testing projects grid', () => {

    const wrapper = shallow(<ProjectsGrid/>)

    test('should load CardProject', () => {
        expect(wrapper).toMatchSnapshot();
    })

})