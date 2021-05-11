import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import React from 'react';
import { EntrepreneurDashboard } from '../../../components/EntrepreneurDashboard/index';

describe('Testing Entrepreneur Dashboard', () => {

    const wrapper = shallow(<EntrepreneurDashboard />)

    test('should load Entrepreneur Dashboard', () => {
        expect(wrapper).toMatchSnapshot();
    })
})
