import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import React from 'react';
import { ConsultorDashboard } from '../../../components/ConsultorDashboard/index';

describe('Consultor dashboard test', () => {
    const wrapper = shallow(<ConsultorDashboard testing objects={
        [
            {
                "id": "1b003629-e519-43a3-b529-565f4331cb51",
                "creationDate": "2019-02-16T05:00:00.000+00:00",
                "receptor": null,
                "sender": {
                    "id": null,
                    "firstName": "jose",
                    "lastName": "Gomez",
                    "email": "jose@gmail.com",
                    "identification": 1019151562,
                    "role": "ENTREPRENEUR",
                    "description": "esto es una prueba",
                    "projects": [],
                    "image": null
                },
                "description": "esto es una prueba",
                "status": "OPEN",
                "type": "FINANCIAL"
            },
            {
                "id": "7853ed2d-7ab4-4f4b-986b-a312ec5f8773",
                "creationDate": "2021-02-16T05:00:00.000+00:00",
                "receptor": null,
                "sender": {
                    "id": null,
                    "firstName": "jose",
                    "lastName": "Gomez",
                    "email": "jose@gmail.com",
                    "identification": 1019151562,
                    "role": "ENTREPRENEUR",
                    "description": "esto es una prueba",
                    "projects": [],
                    "image": null
                },
                "description": "esto es una prueba",
                "status": "OPEN",
                "type": "FINANCIAL"
            },
            {
                "id": "a127aadb-3dd9-4aec-a81e-58a161cf0d3b",
                "creationDate": "2021-02-16T05:00:00.000+00:00",
                "receptor": null,
                "sender": {
                    "id": null,
                    "firstName": "jose",
                    "lastName": "Gomez",
                    "email": "jose@gmail.com",
                    "identification": 1019151562,
                    "role": "ENTREPRENEUR",
                    "description": "esto es una prueba",
                    "projects": [],
                    "image": null
                },
                "description": "esto es una prueba",
                "status": "OPEN",
                "type": "FINANCIAL"
            }
        ]
    }/>)
    test('should load consultor dashboard ', () => {
        expect(wrapper).toMatchSnapshot();
    });
    
    

})
