import React from "react";
import {render, screen} from '@testing-library/react';
import {Button} from "./ButtonCustom";

test('renders learn react link', () => {
    render(<Button onClick={() => console.log("HOLA")}>
        Start Investing
    </Button>);
    const linkElement = screen.getByText(/Start Investing/i);
    expect(linkElement).toBeInTheDocument();
});
