import React from "react";
import {render, screen} from '@testing-library/react';
import {Form} from "./index";

test('renders learn react link', () => {
    render(<Form/>);
    const linkElement = screen.getByText(/¿Olvidaste la contraseña?/i);
    expect(linkElement).toBeInTheDocument();
});
