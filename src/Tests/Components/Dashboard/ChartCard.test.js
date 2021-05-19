import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { ChartCard } from '../../../components/Dashboard/ChartCard';

describe('Testing chart card', () => {

    const wrapper = shallow(<ChartCard />);

    test('should load chart card ', () => {
        expect(wrapper).toMatchSnapshot();
    });

})