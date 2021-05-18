import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import React from 'react';
import { CompleteInfo } from '../../../pages';

jest.mock('react-router-dom', () => ({
    useLocation: jest.fn().mockReturnValue({
      pathname: '/complete-info',
      state: {firstNameU: "test"},
      key: '5nvxpbdafa',
    }),
}));


describe('Testing complete information', () => {
    const wrapper = shallow(<CompleteInfo />);
    test('should load complete information', () => {
        expect(wrapper).toMatchSnapshot(); 
    })
    
})
