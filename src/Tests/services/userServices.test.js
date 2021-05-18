import '@testing-library/jest-dom';

import {getUserByEmail} from '../../services/userServices' 

describe('Test user services', () => {
    beforeAll(() => jest.spyOn(window, 'fetch'))

    test('should load user by email', async() => {
        window.fetch.mockResolvedValueOnce({
            ok: true,
            json: async () => ({firstName: "Test", lastName: "test"}),
        })
        const user = await getUserByEmail("hola@mail.com");
        expect(user.firstName).toEqual("Test");
    });
    test('should load user by email', async() => {
        window.fetch.mockResolvedValueOnce({
            ok: false,
            status: 404,
            json: async () => ({"Error": "Error user not found"}),
        })
        const user = await getUserByEmail("hola@mail.com");
        expect(user).toBe(null);
    });

    

})
