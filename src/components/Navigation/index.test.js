import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react';
import {Navigation} from "./index";


test("Click", () => {
    const {container} = render(<Navigation/>);
    const handleClick = jest.fn();
    fireEvent.click(screen.getByText(/Ingresa/i))
    expect(handleClick).toHaveBeenCalledTimes(0)
});
