import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import React from 'react';
import PayButton from '../../../components/Payment/index';

describe('Testing menu drawer', () => {

    const wrapper = shallow(<PayButton amount="200000" projectname="Proyecto tecnológico" currency="cop" country="co" />)

    test('should load PayButton', () => {
        expect(wrapper).toMatchSnapshot();
    });

})
