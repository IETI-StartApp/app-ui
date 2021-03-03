import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import React from 'react';
import App from "./App";


describe('Testing progress bar', () => {

    const wrapper = shallow(<App/>)

    test('should render appº', () => {
        expect(wrapper).toMatchSnapshot();
    })

})
