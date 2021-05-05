import React from 'react';
import { render, screen } from '@testing-library/react';
import {ProjectsGridPage} from "./index";

test('renders learn react link', () => {
    render(<ProjectsGridPage />);
    const linkElement = screen.getByText(/StartApp/i);
    expect(linkElement).toBeInTheDocument();
});
