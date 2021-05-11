import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import React from 'react';
import { ProjectsChart } from '../../../components/EntrepreneurDashboard/ProjectsChart';

describe('Testing Projects Chart', () => {

    const wrapper = shallow(<ProjectsChart />)

    test('should load Projects Chart', () => {
        expect(wrapper).toMatchSnapshot();
    })
})
