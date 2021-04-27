import React from 'react';
import {render, screen} from '@testing-library/react';
import {Features} from "./index";

const features = [
    {
        "icon": "fa fa-users",
        "title": "Una comunidad de inversionistas",
        "text": "¿Necesitas ayuda con una idea? Nuestra comunidad está aquí para invertir en increibles startups."
    },
    {
        "icon": "fa fa-certificate",
        "title": "Expertos en plataformas de servicios",
        "text": "¿Quieres saber qué funciona y qué no? Programe una llamada en línea con alguien de nuestro equipo para saber cómo aplicar todos sus conocimientos a su idea."
    },
    {
        "icon": "fa fa-handshake-o",
        "title": "Contratos inteligentes",
        "text": "Tienes un proceso transparente por ambas partes y ademas que te permitira tener claro las condiciones de inversion."
    }
]

test('renders learn react link', () => {
    render(<Features data={features}/>);
    const linkElement = screen.getByText(/Expertos en plataformas de servicios/i);
    expect(linkElement).toBeInTheDocument();
});
