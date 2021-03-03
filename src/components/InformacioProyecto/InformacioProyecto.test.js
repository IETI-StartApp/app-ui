import React from 'react';
import { render, screen } from '@testing-library/react';
import {InformacioProyecto} from './InformacioProyecto'

test('renders learn react link', () => {
  render(<InformacioProyecto nombreProyecto = "WI buckets" nombreUsuario = "Sergio Alejandro" fotoPerfil = 'Ruta de la foto de perfil'/>);
  const linkElement = screen.getByText(/WI buckets/i);
  expect(linkElement).toBeInTheDocument();
});
test('renders learn react link', () => {
  render(<InformacioProyecto nombreProyecto = "WI buckets" nombreUsuario = "Sergio Alejandro" fotoPerfil = 'Ruta de la foto de perfil' />);
  const linkElement = screen.getByText(/Sergio Alejandro/i);
  expect(linkElement).toBeInTheDocument();
});
