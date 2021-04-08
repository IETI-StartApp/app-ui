import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import React from 'react';
import { PaymentResponse } from '../../../pages/Payment/index';

describe('Testing PaymentResponse', () => {

    const wrapper = shallow(<PaymentResponse />)

    test('should load PaymentResponse', () => {
        expect(wrapper).toMatchSnapshot();
    });

})