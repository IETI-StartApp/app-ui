import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import React from 'react';
import {InfoModal} from '../../../components/InfoModal/InfoModal';

describe('Testing Project Financing', () => {
    const shallowWrapper = shallow(<InfoModal open = {true} userEmail={"email@mail.com"} firstNameU={"mail"} />);
    let wrapper = shallowWrapper;
    beforeEach( () =>{
        jest.clearAllMocks();
        wrapper = shallowWrapper;    
    });
    test('should load info modal', () => {
        expect(wrapper).toMatchSnapshot();
    });


});   