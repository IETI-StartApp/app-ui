import React from 'react';
import {fireEvent, getByTestId, queryByAttribute, render} from '@testing-library/react'
import {Header} from "./index";

test("Click", () => {

    const getById = queryByAttribute.bind(null, 'id');

    const dom = render(<Header />);
    const button = getById(dom.container, 'buttonLog');
    fireEvent.click(button);
});
