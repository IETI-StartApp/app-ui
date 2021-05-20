import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { ShowCardComment } from '../../components/ShowCommentCard/ShowCardComment';

describe('Testing comment page', () => {
    const wrapper = shallow(<ShowCardComment/>);
    
    test('should render comment page', () => {
        expect(wrapper).toMatchSnapshot();
    });
    
})