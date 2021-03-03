import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import React from 'react';
import {ProjectFinancing} from '../../../components/ProjectForm/ProjectFinancing';

describe('Testing Project Financing', () => {
    const handleChange = jest.fn();
    const handleNext = jest.fn();
    const handleDateChange = jest.fn();
    const shallowWrapper = shallow(<ProjectFinancing formValues={{investment:0,minInvestment:0}} 
                                                handleChange={handleChange} 
                                                handleNext={handleNext}
                                                handleDateChange={handleDateChange}
                                                zone= {{zone:'co-CO',region:'COP'}}/>);
    let wrapper = shallowWrapper;
    beforeEach( () =>{
        jest.clearAllMocks();
        wrapper = shallowWrapper;    
    });
    test('should load project financing', () => {
        expect(wrapper).toMatchSnapshot();
    });


});   