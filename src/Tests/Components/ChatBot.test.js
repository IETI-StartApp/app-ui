import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { ChatBotContainer } from '../../components/ChatBot/ChatBotContainer';
import { IconButton } from '@material-ui/core';

describe('Testing comment page', () => {
    const wrapper = shallow(<ChatBotContainer/>);
    
    test('should render comment page', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('should call handleDrawerToggle function', () => {
        const iconButton = wrapper.find(IconButton).at(0);
        iconButton.simulate("Click");
    });

    
})