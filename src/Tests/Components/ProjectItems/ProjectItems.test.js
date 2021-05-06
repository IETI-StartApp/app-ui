import React from 'react';
import {render, screen} from '@testing-library/react';
import {ProjectsItems} from "../../../components";

test('renders learn react link', () => {
    render(<ProjectsItems
        projects={[
            {
                name: "testing",
                image: "a",
                finance: {}
            },
            {
                name: "a",
                image: "a",
                finance: {}
            },
            {
                name: "a",
                image: "a",
                finance: {}
            }]}/>);
    const linkElement = screen.getByText(/testing/i);
    expect(linkElement).toBeInTheDocument();
});
