import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import React from 'react';
import {TextField,Button,Typography} from '@material-ui/core';
import {ProjectDescription} from '../../../components/ProjectForm/ProjectDescription'


describe('Testing Project Description', () => {
    const handleChange = jest.fn();
    const handleNext = jest.fn();
    const shallowWrapper = shallow(<ProjectDescription formValues={{projectName:'',projectDescription:''}} 
                                                handleChange={handleChange} 
                                                handleNext={handleNext} />);
    let wrapper = shallowWrapper;
    beforeEach( () =>{
        jest.clearAllMocks();
        wrapper = shallowWrapper;    
    });

    test('should load <ProjectDescription /> correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('should change projectName', () => {
        const projectNameTextField = wrapper.find(TextField).at(0);
        const testProjectName = "testinputProjectName";
        const event = {target : {value:testProjectName}};
        projectNameTextField.simulate('change',event);
        expect( handleChange ).toHaveBeenCalled();
        
    });
    test('should change projectDescription', () => {
        const projectDescriptionTextField = wrapper.find(TextField).at(1);
        const testProjectName = "testinputProjectDescription";
        const event = {target : {value:testProjectName}};
        projectDescriptionTextField.simulate('change',event);
        expect( handleChange ).toHaveBeenCalled();
    });
    test('should change screen', () => {
        const nextButton = wrapper.find(Button).at(0);
        nextButton.simulate('click');
        expect( handleNext ).toHaveBeenCalled();
    });
    test('should load tipography', () =>{
        const projectDescriptionHeader = wrapper.find(Typography).at(0).text();
        expect( projectDescriptionHeader).toBe('Elige un nombre para tu proyecto');
    });
    
})
