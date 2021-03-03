import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import React from 'react';
import {ProgressBar} from '../../../components/ProgressBar/ProgressBar'


describe('Testing progress bar', () => {

    const wrapper = shallow(<ProgressBar activeStep={0}/>)

    test('should load progressbar', () => {
        expect(wrapper).toMatchSnapshot();
    })
    
})
