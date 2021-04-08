import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import React from 'react';
import Response from '../../../components/Payment/Response';

describe('Testing menu drawer', () => {

    const wrapper = shallow(<Response />)

    test('should load Response', () => {
        expect(wrapper).toMatchSnapshot();
    });

})