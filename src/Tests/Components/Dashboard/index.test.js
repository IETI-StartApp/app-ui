import React from 'react';
import { Dashboard } from '../../../components/Dashboard/index';
import { shallow } from 'enzyme';

describe('Testing dashboard', () => {

    const wrapper = shallow(<Dashboard  items={[]}  projects={[]} projectsTitle="Projects Title" chartTitle="Chart Title" />)

    test('should load dashboard ', () => {
        expect(wrapper).toMatchSnapshot();
    });

})