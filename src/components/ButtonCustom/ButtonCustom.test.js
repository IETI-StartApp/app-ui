import React from "react";
import {render, screen} from '@testing-library/react';
import {Button, CustomTypography} from "./ButtonCustom";

test('renders learn react link', () => {
    render(<Button onClick={() => console.log("HOLA")}>
        Start Investing
    </Button>);
    const linkElement = screen.getByText(/Start Investing/i);
    expect(linkElement).toBeInTheDocument();
});

test('renders learn react link', () => {
    render( <CustomTypography text={'red'}>
        prueba
    </CustomTypography>);
    const linkElement = screen.getByText(/prueba/i);
    expect(linkElement).toBeInTheDocument();
});
