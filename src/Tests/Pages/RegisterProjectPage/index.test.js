import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import React from 'react';
import {RegisterProjectPage} from '../../../pages/RegisterProjectPage/index';

describe('Testing register page', () => {
    const wrapper = shallow(<RegisterProjectPage/>);
                                        
    test('should render register page', () => {
         expect(wrapper).toMatchSnapshot();   
    })
    
})
