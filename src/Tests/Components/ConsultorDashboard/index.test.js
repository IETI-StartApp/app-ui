import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import React from 'react';
import { ConsultorDashboard } from '../../../components/ConsultorDashboard/index';

describe('Consultor dashboard test', () => {
    const wrapper = shallow(<ConsultorDashboard />)

    test('should load consultor dashboard ', () => {
        expect(wrapper).toMatchSnapshot();
    });
})
