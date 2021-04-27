import React from 'react';
import { render, screen } from '@testing-library/react';
import {HeaderT} from './index';

test('renders learn react link', () => {
    render(<HeaderT/>);
    const linkElement = screen.getByText(/Cargando/i);
    expect(linkElement).toBeInTheDocument();
});
