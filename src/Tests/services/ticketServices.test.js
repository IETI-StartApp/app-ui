import '@testing-library/jest-dom';
import {getAllTickets} from '../../services/ticketServices';
import {getAllReceptor} from '../../services/ticketServices' 

describe('ticket services test', () => {
    beforeAll(() => jest.spyOn(window, 'fetch'))
    test('should get all tickets', async() => {
        window.fetch.mockResolvedValueOnce({
            ok: true,
            json: async () => ({type: "FINANCIAL", User: "test"}),
        })
        const ticket = await getAllTickets();
        expect(ticket.type).toEqual("FINANCIAL");
    });
    test('should get all receptors', async() => {
        window.fetch.mockResolvedValueOnce({
            ok: true,
            json: async () => ({user: "test"}),
        })
        const receptor = await getAllReceptor();
        expect(receptor.user).toBe("test");
    });
})


