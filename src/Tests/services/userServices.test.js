import '@testing-library/jest-dom';

import {getUserByEmail, postProject} from '../../services/userServices'

describe('Test user services', () => {
    beforeAll(() => jest.spyOn(window, 'fetch'))

    test('should load user by email', async () => {
        window.fetch.mockResolvedValueOnce({
            ok: true,
            json: async () => ({firstName: "Test", lastName: "test"}),
        })
        const user = await getUserByEmail("hola@mail.com");
        expect(user.firstName).toEqual("Test");
    });
    test('should load user by email', async () => {
        window.fetch.mockResolvedValueOnce({
            ok: false,
            status: 404,
            json: async () => ({"Error": "Error user not found"}),
        })
        const user = await getUserByEmail("hola@mail.com");
        expect(user).toBe(null);
    });

    const project = {
        "name": "WTFWTF",
        "country": "CO",
        "description": "HOLASASDFASDFASDFasdfasdf",
        "finance": {
            "value": "10000000",
            "investorNumber": 2,
            "valuation": "10000000",
            "minimumInvestment": "1000000",
            "startDate": "2021-05-20T05:35:30.125Z",
            "endDate": "2021-05-20T05:35:05.866Z"
        },
        "comments": null,
        "user": {
            "firstName": "S",
            "lastName": "a",
            "email": "srubianof@gmail.com",
            "identification": 1019151562,
            "role": "ENTREPRENEUR",
            "description": "esto es una prueba",
            "projects": []
        }
    }
    test('should post', async () => {
        window.fetch.mockResolvedValueOnce({
            ok: true,
            status: 201,
            json: async () => ({}),
        })
        const user = await postProject(project);
        expect(user).toBe(undefined);
    });

})
