import React from 'react';
import { render, screen } from '@testing-library/react';
import {BarInfo} from './BarInfo';
const json={
  "nombre": "WI buckets",
  "imagen": "https://cdn.discordapp.com/attachments/471909299753451523/814307715815309352/unknown.png",
  "emprendedor": "Sergio Alejandro",
  "video": "https://www.youtube.com/watch?v=T2xLJ-rU3wQ",
  "link": "https://en.wikipedia.org/wiki/Bucket",
  "pais": "Colombia",
  "descripcion": "Por una ciudad limpia, ordenada e inteligente"
}
const {nombre, imagen, emprendedor, video, link, pais, descripcion} = json;
test('renders learn react link', () => {
  render(<BarInfo link = {link} pais = {pais} texto = {descripcion}/>);
  const linkElement = screen.getByText(/Sitio web/i);
  expect(linkElement).toBeInTheDocument();
});
test('renders learn react link', () => {
  render(<BarInfo link = {link} pais = {pais} texto = {descripcion}/>);
  const linkElement = screen.getByText(/Colombia/i);
  expect(linkElement).toBeInTheDocument();
});