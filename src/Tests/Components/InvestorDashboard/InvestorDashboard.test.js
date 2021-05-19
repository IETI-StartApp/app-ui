import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import React from 'react';
import { InvestorDashboard } from '../../../components/InvestorDashboard/index';

describe('Testing Investor Dashboard', () => {

    const wrapper = shallow(<InvestorDashboard />)

    test('should load Investor Dashboard ', () => {
        expect(wrapper).toMatchSnapshot();
    })
})
