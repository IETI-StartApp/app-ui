import React from 'react';
import { render, screen } from '@testing-library/react';
import {HeaderT} from './index';

const header = {
    "title": "StartApp"
}

test('renders learn react link', () => {
    render(<HeaderT/>);
    const linkElement = screen.getByText(/Cargando/i);
    expect(linkElement).toBeInTheDocument();
});

test('renders learn react link', () => {
    render(<HeaderT data={header}/>);
    const linkElement = screen.getByText(/StartApp/i);
    expect(linkElement).toBeInTheDocument();
});
