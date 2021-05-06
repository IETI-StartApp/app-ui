import React from 'react';
import {render, screen} from '@testing-library/react';
import {ProjectsGridPage} from "./index";

test('renders learn react link', () => {
    render(<ProjectsGridPage testing objects={[
        {
            "country": "CO",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lacus laoreet non curabitur gravida. Vel turpis nunc eget lorem. Commodo sed egestas egestas fringilla. Est placerat in egestas erat.",
            "finance": {
                "value": 10000,
                "investorNumber": 1,
                "valuation": 50000,
                "minimumInvestment": 1,
                "startDate": "2019-02-16T05:00:00.000Z",
                "endDate": "2019-02-16T05:00:00.000Z"
            },
            "image": "https://images.unsplash.com/photo-1619537765439-1469ac26014a?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80",
            "name": "Beach & talk",
            "video": "https://youtu.be/hCrJTLdmkHo"
        },{
            "country": "CO",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lacus laoreet non curabitur gravida. Vel turpis nunc eget lorem. Commodo sed egestas egestas fringilla. Est placerat in egestas erat.",
            "finance": {
                "value": 10000,
                "investorNumber": 1,
                "valuation": 50000,
                "minimumInvestment": 1,
                "startDate": "2019-02-16T05:00:00.000Z",
                "endDate": "2019-02-16T05:00:00.000Z"
            },
            "image": "https://images.unsplash.com/photo-1619537765439-1469ac26014a?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80",
            "name": "Beach & talk",
            "video": "https://youtu.be/hCrJTLdmkHo"
        }]}/>);
    const linkElement = screen.getByText(/StartApp/i);
    expect(linkElement).toBeInTheDocument();
});
