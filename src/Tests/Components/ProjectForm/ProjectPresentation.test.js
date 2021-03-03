import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import React from 'react';
import {TextField,Button,Typography} from '@material-ui/core';
import {ProjectPresentation} from '../../../components/ProjectForm/ProjectPresentation';

describe('Testing Project Presentation', () => {
    const handleChange = jest.fn();
    const handleNext = jest.fn();
    const shallowWrapper = shallow(<ProjectPresentation formValues={{country:'',videoSource:''}} 
                                                handleChange={handleChange} 
                                                handleNext={handleNext} />);
    let wrapper = shallowWrapper;
    beforeEach( () =>{
        jest.clearAllMocks();
        wrapper = shallowWrapper;    
    });

    test('should load <ProjectPresentation /> correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('should load title', () =>{
        const title = wrapper.find(Typography).at(0).text();
        expect( title).toBe("Presenta tu proyecto");
    });
    test('should load title', () =>{
        const title = wrapper.find(Typography).at(1).text();
        expect( title).toBe("\"Presenta tu proyecto con un video de youtube\"");
    });
    test('should change projectName', () => {
        const countryTextField = wrapper.find(TextField).at(0);
        const testCountry = "Colombia";
        const event = {target : {value:testCountry}};
        countryTextField.simulate('change',event);
        expect( handleChange ).toHaveBeenCalled();
    });
    test('should change projectName', () => {
        const videoSourceTextField = wrapper.find(TextField).at(1);
        const testVideoSource = "https://www.youtube.com/watch?v=T2xLJ-rU3wQ";
        const event = {target : {value:testVideoSource}};
        videoSourceTextField.simulate('change',event);
        expect( handleChange ).toHaveBeenCalled();

    });
    test('should update state on click', () => {
        const updateButton = wrapper.find(Button).at(0);
        const setVisible = jest.fn();
        const handleClick = jest.spyOn(React, "useState");
        handleClick.mockImplementation(isVisible => [isVisible, setVisible]);
        updateButton.simulate('click');
        expect( setVisible ).toBeTruthy();
    });
    test('should change screen', () => {
        const nextButton = wrapper.find(Button).at(1);
        nextButton.simulate('click');
        expect( handleNext ).toHaveBeenCalled();
    });
    

});