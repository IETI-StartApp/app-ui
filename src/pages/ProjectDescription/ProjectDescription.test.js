import React from 'react';
import { render, screen } from '@testing-library/react';
import {ProjectDescription} from './ProjectDescription'

test('renders learn react link', () => {
  render(<ProjectDescription />);
  const linkElement = screen.getByText(/WI buckets/i);
  expect(linkElement).toBeInTheDocument();
});
test('renders learn react link', () => {
  render(<ProjectDescription />);
  const linkElement = screen.getByText(/Sergio Alejandro/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders learn react link', () => {
  render(<ProjectDescription />);
  const linkElement = screen.getByText(/Sitio web/i);
  expect(linkElement).toBeInTheDocument();
});
test('renders learn react link', () => {
  render(<ProjectDescription />);
  const linkElement = screen.getByText(/Colombia/i);
  expect(linkElement).toBeInTheDocument();
});
test('renders learn react link', () => {
  render(<ProjectDescription />);
  const linkElement = screen.getByText(/Por una ciudad limpia, ordenada e inteligente/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders learn react link', () => {
  render(<ProjectDescription />);
  const linkElement = screen.getByText(/1.000.000/i);
  expect(linkElement).toBeInTheDocument();
});
test('renders learn react link', () => {
  render(<ProjectDescription />);
  const linkElement = screen.getByText(/8/i);
  expect(linkElement).toBeInTheDocument();
});
test('renders learn react link', () => {
  render(<ProjectDescription />);
  const linkElement = screen.getByText(/Inversionistas/i);
  expect(linkElement).toBeInTheDocument();
});
test('renders learn react link', () => {
  render(<ProjectDescription />);
  const linkElement = screen.getByText(/50.000/i);
  expect(linkElement).toBeInTheDocument();
});
test('renders learn react link', () => {
  render(<ProjectDescription />);
  const linkElement = screen.getByText(/Valoración/i);
  expect(linkElement).toBeInTheDocument();
});
test('renders learn react link', () => {
  render(<ProjectDescription />);
  const linkElement = screen.getByText(/30.000/i);
  expect(linkElement).toBeInTheDocument();
});
test('renders learn react link', () => {
  render(<ProjectDescription />);
  const linkElement = screen.getByText(/Inversión minima/i);
  expect(linkElement).toBeInTheDocument();
});
test('renders learn react link', () => {
  render(<ProjectDescription />);
  const linkElement = screen.getByText(/465/i);
  expect(linkElement).toBeInTheDocument();
});
test('renders learn react link', () => {
  render(<ProjectDescription />);
  const linkElement = screen.getByText(/Días faltantes/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders learn react link', () => {
  render(<ProjectDescription />);
  const linkElement = screen.getByText(/Fecha inicio/i);
  expect(linkElement).toBeInTheDocument();
});
test('renders learn react link', () => {
  render(<ProjectDescription />);
  const linkElement = screen.getByText(/Fecha Final/i);
  expect(linkElement).toBeInTheDocument();
});
