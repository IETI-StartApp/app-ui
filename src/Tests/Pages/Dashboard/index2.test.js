import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import React from 'react';
import { Dashboard } from '../../../pages/Dashboard/index';
jest.mock('react-router-dom', () => ({
    useLocation: jest.fn().mockReturnValue({
      pathname: '/dashboard',
      search: '',
      hash: '',
      state: {role: "INVESTOR"},
      key: 'INVESTOR',
    }),
}));
describe('Testing dashboard', () => {
    const wrapper = shallow(<Dashboard />);
                                        
    test('should render dashboard', () => {
         expect(wrapper).toMatchSnapshot();   
    })
    
})
