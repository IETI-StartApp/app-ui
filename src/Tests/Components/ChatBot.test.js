import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { ChatBotContainer } from '../../components/ChatBot/ChatBotContainer';

describe('Testing comment page', () => {
    const wrapper = shallow(<ChatBotContainer/>);
    
    test('should render comment page', () => {
        expect(wrapper).toMatchSnapshot();
    });
    
})