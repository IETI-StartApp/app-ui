import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import React from 'react';
import { InvestmentsChart } from '../../../components/InvestorDashboard/InvestmentsChart';

describe('Testing Investments Chart', () => {

    const wrapper = shallow(<InvestmentsChart />)

    test('should load Investments Chart ', () => {
        expect(wrapper).toMatchSnapshot();
    })
})
