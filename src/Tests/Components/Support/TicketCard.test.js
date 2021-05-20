import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import React from 'react';
import {TicketCard} from '../../../components/Support/TicketCard';

describe('Test ticket card', () => {
    const shallowWrapper = shallow(<TicketCard tickets={[{id:1,status:"OPEN",receptor:{email:"test@mail.com"}},
    {id:2,status:"PENDING",receptor:{email:"test2@mail.com"}}]} title={"test"} status="OPEN" />);
    let wrapper = shallowWrapper;
    beforeEach( () =>{
        jest.clearAllMocks();
        wrapper = shallowWrapper;    
    });
    test('should load ticket card', () => {
        expect(wrapper).toMatchSnapshot();
    });
    
})
