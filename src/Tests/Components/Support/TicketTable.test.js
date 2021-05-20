import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import React from 'react';
import {TicketTable} from '../../../components/Support/TicketTable';

describe('Testing ticket table', () => {
    const shallowWrapper = shallow(<TicketTable rows={[]}/>);
    let wrapper = shallowWrapper;
    beforeEach( () =>{
        jest.clearAllMocks();
        wrapper = shallowWrapper;    
    });
    test('should load ticket table', () => {
        expect(wrapper).toMatchSnapshot();
    })
})
