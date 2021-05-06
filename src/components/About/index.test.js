import React from 'react';
import {render, screen} from '@testing-library/react';
import {About} from "./index";

const about = {
    "paragraph": "StartApp es la mejor plataforma de financiación de startups que va a ayudar a miles de personas y organizaciones a recaudar dinero para las causas que les interesan.\n Nuestra misión es capacitar a las personas para que se unan en torno a las ideas que les importan y, juntos, hacer que esas ideas cobren vida.",
    "Why": [
        "Lorem ipsum dolor",
        "Tempor incididunt",
        "Lorem ipsum dolor",
        "Incididunt ut labore"
    ],
    "Why2": [
        "Aliquip ex ea commodo",
        "Lorem ipsum dolor",
        "Exercitation ullamco",
        "Lorem ipsum dolor"
    ]
}

test('renders learn react link', () => {
    render(<About data={about}/>);
    const linkElement = screen.getByText(/StartApp es la mejor plataforma/i);
    expect(linkElement).toBeInTheDocument();
});
