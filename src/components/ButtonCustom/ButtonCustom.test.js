import React from "react";
import {Button, CustomTypography} from "./index";
import '@testing-library/jest-dom';
import {shallow} from 'enzyme';


describe('should render button', () => {

    const wrapper = shallow(<Button onClick={() => console.log("HOLA")}>
        Start Investing
    </Button>)

    test('should render button', () => {
        expect(wrapper).toMatchSnapshot();
    })

})
describe('should render typography', () => {

    const wrapper = shallow(<CustomTypography text={'red'}>
        prueba
    </CustomTypography>)

    test('should render typography', () => {
        expect(wrapper).toMatchSnapshot();
    })

})
