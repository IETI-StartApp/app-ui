import React from "react";
import {render, screen} from '@testing-library/react';
import {LoginPage} from "./index";

test('renders learn react link', () => {
    render(<LoginPage/>);
    const linkElement = screen.getByText(/Bienvenido de vuelta/i);
    expect(linkElement).toBeInTheDocument();
});
