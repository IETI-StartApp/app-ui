import React from 'react';
import { render, screen } from '@testing-library/react';
import {ProjectInfo} from './index'

test('renders learn react link', () => {
  render(<ProjectInfo nombreProyecto = "WI buckets" nombreUsuario = "Sergio Alejandro" fotoPerfil = 'Ruta de la foto de perfil'/>);
  const linkElement = screen.getByText(/WI buckets/i);
  expect(linkElement).toBeInTheDocument();
});
test('renders learn react link', () => {
  render(<ProjectInfo nombreProyecto = "WI buckets" nombreUsuario = "Sergio Alejandro" fotoPerfil = 'Ruta de la foto de perfil' />);
  const linkElement = screen.getByText(/Sergio Alejandro/i);
  expect(linkElement).toBeInTheDocument();
});
