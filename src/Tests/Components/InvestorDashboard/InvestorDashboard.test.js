import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import React from 'react';
import { InvestorDashboard } from '../../../components/InvestorDashboard/index';

describe('Testing navigation', () => {

    const wrapper = shallow(<InvestorDashboard />)

    test('should load navigation ', () => {
        expect(wrapper).toMatchSnapshot();
    })
})
