import '@testing-library/jest-dom';
import {shallow} from 'enzyme';
import React from 'react';
import {Form} from "./index";


describe('should load FormComponent', () => {

    const wrapper = shallow(<Form/>)

    test('should load FormComponent', () => {
        expect(wrapper).toMatchSnapshot();
    })

})
