import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import React from 'react';
import { Dashboard } from '../../../pages/Dashboard/index';

describe('Testing dashboard', () => {
    const wrapper = shallow(<Dashboard />);
                                        
    test('should render dashboard', () => {
         expect(wrapper).toMatchSnapshot();   
    })
    
})
