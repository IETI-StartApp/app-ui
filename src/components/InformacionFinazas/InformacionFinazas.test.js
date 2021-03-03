import React from 'react';
import { render, screen } from '@testing-library/react';
import {InformacionFinazas} from './InformacionFinazas'; 

const finanzas = {
    "valor": "$1.000.000",
    "numeroInversionistas": "8",
    "valoracion": "50.000",
    "inversionMinima": "30.000",
    "socios": "465",
    "fechaInicio": "25/01/2017",
    "fechaFin": "24/02/2022"
}

test('renders learn react link', () => {
  render(<InformacionFinazas 
    valor = {finanzas.valor}  
    inversionistas = {finanzas.numeroInversionistas} 
    valoracion = {finanzas.valoracion} 
    InversionMinima ={finanzas.inversionMinima} 
    socios = {finanzas.socios} 
    fechaInicio = {finanzas.fechaInicio} 
    FechaFin = {finanzas.fechaFin}/>);
  const linkElement = screen.getByText(/8/i);
  expect(linkElement).toBeInTheDocument();
});
test('renders learn react link', () => {
  render(<InformacionFinazas 
    valor = {finanzas.valor}  
    inversionistas = {finanzas.numeroInversionistas} 
    valoracion = {finanzas.valoracion} 
    InversionMinima ={finanzas.inversionMinima} 
    socios = {finanzas.socios} 
    fechaInicio = {finanzas.fechaInicio} 
    FechaFin = {finanzas.fechaFin}/>);
  const linkElement = screen.getByText(/1.000.000/i);
  expect(linkElement).toBeInTheDocument();
});
test('renders learn react link', () => {
  render(<InformacionFinazas 
    valor = {finanzas.valor}  
    inversionistas = {finanzas.numeroInversionistas} 
    valoracion = {finanzas.valoracion} 
    InversionMinima ={finanzas.inversionMinima} 
    socios = {finanzas.socios} 
    fechaInicio = {finanzas.fechaInicio} 
    FechaFin = {finanzas.fechaFin}/>);
  const linkElement = screen.getByText(/8/i);
  expect(linkElement).toBeInTheDocument();
});
test('renders learn react link', () => {
  render(<InformacionFinazas 
    valor = {finanzas.valor}  
    inversionistas = {finanzas.numeroInversionistas} 
    valoracion = {finanzas.valoracion} 
    InversionMinima ={finanzas.inversionMinima} 
    socios = {finanzas.socios} 
    fechaInicio = {finanzas.fechaInicio} 
    FechaFin = {finanzas.fechaFin}/>);
  const linkElement = screen.getByText(/Inversionistas/i);
  expect(linkElement).toBeInTheDocument();
});
test('renders learn react link', () => {
  render(<InformacionFinazas 
    valor = {finanzas.valor}  
    inversionistas = {finanzas.numeroInversionistas} 
    valoracion = {finanzas.valoracion} 
    InversionMinima ={finanzas.inversionMinima} 
    socios = {finanzas.socios} 
    fechaInicio = {finanzas.fechaInicio} 
    FechaFin = {finanzas.fechaFin}/>);
  const linkElement = screen.getByText(/50.000/i);
  expect(linkElement).toBeInTheDocument();
});
test('renders learn react link', () => {
  render(<InformacionFinazas 
    valor = {finanzas.valor}  
    inversionistas = {finanzas.numeroInversionistas} 
    valoracion = {finanzas.valoracion} 
    InversionMinima ={finanzas.inversionMinima} 
    socios = {finanzas.socios} 
    fechaInicio = {finanzas.fechaInicio} 
    FechaFin = {finanzas.fechaFin}/>);
  const linkElement = screen.getByText(/Valoración/i);
  expect(linkElement).toBeInTheDocument();
});
test('renders learn react link', () => {
  render(<InformacionFinazas 
    valor = {finanzas.valor}  
    inversionistas = {finanzas.numeroInversionistas} 
    valoracion = {finanzas.valoracion} 
    InversionMinima ={finanzas.inversionMinima} 
    socios = {finanzas.socios} 
    fechaInicio = {finanzas.fechaInicio} 
    FechaFin = {finanzas.fechaFin}/>);
  const linkElement = screen.getByText(/30.000/i);
  expect(linkElement).toBeInTheDocument();
});
test('renders learn react link', () => {
  render(<InformacionFinazas 
    valor = {finanzas.valor}  
    inversionistas = {finanzas.numeroInversionistas} 
    valoracion = {finanzas.valoracion} 
    InversionMinima ={finanzas.inversionMinima} 
    socios = {finanzas.socios} 
    fechaInicio = {finanzas.fechaInicio} 
    FechaFin = {finanzas.fechaFin}/>);
  const linkElement = screen.getByText(/Inversión minima/i);
  expect(linkElement).toBeInTheDocument();
});
test('renders learn react link', () => {
  render(<InformacionFinazas 
    valor = {finanzas.valor}  
    inversionistas = {finanzas.numeroInversionistas} 
    valoracion = {finanzas.valoracion} 
    InversionMinima ={finanzas.inversionMinima} 
    socios = {finanzas.socios} 
    fechaInicio = {finanzas.fechaInicio} 
    FechaFin = {finanzas.fechaFin}/>);
  const linkElement = screen.getByText(/465/i);
  expect(linkElement).toBeInTheDocument();
});
test('renders learn react link', () => {
  render(<InformacionFinazas 
    valor = {finanzas.valor}  
    inversionistas = {finanzas.numeroInversionistas} 
    valoracion = {finanzas.valoracion} 
    InversionMinima ={finanzas.inversionMinima} 
    socios = {finanzas.socios} 
    fechaInicio = {finanzas.fechaInicio} 
    FechaFin = {finanzas.fechaFin}/>);
  const linkElement = screen.getByText(/Días faltantes/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders learn react link', () => {
  render(<InformacionFinazas 
    valor = {finanzas.valor}  
    inversionistas = {finanzas.numeroInversionistas} 
    valoracion = {finanzas.valoracion} 
    InversionMinima ={finanzas.inversionMinima} 
    socios = {finanzas.socios} 
    fechaInicio = {finanzas.fechaInicio} 
    FechaFin = {finanzas.fechaFin}/>);
  const linkElement = screen.getByText(/Fecha inicio/i);
  expect(linkElement).toBeInTheDocument();
});
test('renders learn react link', () => {
  render(<InformacionFinazas 
    valor = {finanzas.valor}  
    inversionistas = {finanzas.numeroInversionistas} 
    valoracion = {finanzas.valoracion} 
    InversionMinima ={finanzas.inversionMinima} 
    socios = {finanzas.socios} 
    fechaInicio = {finanzas.fechaInicio} 
    FechaFin = {finanzas.fechaFin}/>);
  const linkElement = screen.getByText(/Fecha Final/i);
  expect(linkElement).toBeInTheDocument();
});