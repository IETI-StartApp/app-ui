import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import React from 'react';
import {InfoModal} from '../../../components/InfoModal/InfoModal';
import {TextField,Select,Button} from '@material-ui/core';

describe('Testing Project Financing', () => {
    const handleLogin = jest.fn()
    const shallowWrapper = shallow(<InfoModal open = {true} userEmail={"email@mail.com"} firstNameU={"mail"} />);
    let wrapper = shallowWrapper;
    beforeEach( () =>{
        jest.clearAllMocks();
        wrapper = shallowWrapper;    
    });
    test('should load info modal', () => {
        expect(wrapper).toMatchSnapshot();
    });
    test('should change name', () => {
        const name = wrapper.find(TextField).at(0);
        const testName = "test";
        const event = {target : {value:testName}};
        name.simulate('change',event);
    });
    test('should change lastName', () => {
        const lastName = wrapper.find(TextField).at(1);
        const testlastName = "test";
        const event = {target : {value:testlastName}};
        lastName.simulate('change',event);
    });
    test('should change identification', () => {
        const identification = wrapper.find(TextField).at(2);
        const testidentification = "test";
        const event = {target : {value:testidentification}};
        identification.simulate('change',event);
    });
    test('should change description', () => {
        const description = wrapper.find(TextField).at(3);
        const testdescription = "test";
        const event = {target : {value:testdescription}};
        description.simulate('change',event);
    });
    test('should change role', () => {
        const role = wrapper.find(Select).at(0);
        const testrole = "ENTREPRENEUR";
        const event = {target : {value:testrole}};
        role.simulate('change',event);
    });
    test('should login', () => {
        const login = wrapper.find(Button).at(0);
        login.simulate('click');
    });

});   