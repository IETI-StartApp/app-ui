import {postProject} from "../../services/userServices";

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
