import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import React from 'react';
import { InvestmentsChart } from '../../../components/InvestorDashboard/InvestmentsChart';

describe('Testing navigation', () => {

    const wrapper = shallow(<InvestmentsChart />)

    test('should load navigation ', () => {
        expect(wrapper).toMatchSnapshot();
    })
})
