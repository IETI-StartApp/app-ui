import React from 'react';
import {render, screen} from '@testing-library/react';
import {Team} from "./index";

const team = [
    {
        "img": "img/team/d.jpeg",
        "name": "Felipe Rojas",
        "job": "Ingeniero"
    },
    {
        "img": "img/team/a.jpeg",
        "name": "Jose Gomez",
        "job": "Ingeniero"
    },
    {
        "img": "img/team/b.jpeg",
        "name": "Santiago Rubiano",
        "job": "Ingeniero"
    },
    {
        "img": "img/team/c.jpeg",
        "name": "Alejandro Bohorquez",
        "job": "Ingeniero"
    },
    {
        "img": "img/team/e.jpeg",
        "name": "Angi Jimenez",
        "job": "Ingeniero"
    }
]

test('renders learn react link', () => {
    render(<Team data={team}/>);
    const linkElement = screen.getByText(/Angi Jimenez/i);
    expect(linkElement).toBeInTheDocument();
});
