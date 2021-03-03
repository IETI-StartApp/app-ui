import React from "react";
import {render, screen} from '@testing-library/react';
import {UserSelect} from "./UserSelect";

test('renders learn react link', () => {
    render(<UserSelect/>);
    const linkElement = screen.getByText(/Unase a nosotros!/i);
    expect(linkElement).toBeInTheDocument();
});

  test('renders learn react link', () => {
    render(<UserSelect/>);
    const linkElement = screen.getByText(/Para comenzar este viaje, díganos qué tipo de cuenta desea abrir/i);
    expect(linkElement).toBeInTheDocument();
  });

  test('renders learn react link', () => {
    render(<UserSelect/>);
    const linkElement = screen.getByText(/Emprendedor/i);
    expect(linkElement).toBeInTheDocument();
  });
  test('renders learn react link', () => {
    render(<UserSelect/>);
    const linkElement = screen.getByText(/Inversionista/i);
    expect(linkElement).toBeInTheDocument();
  });
  test('renders learn react link', () => {
    render(<UserSelect/>);
    const linkElement = screen.getByText(/Cuenta personal para gestionar su proyecto y obtener inversiones./i);
    expect(linkElement).toBeInTheDocument();
  });
  test('renders learn react link', () => {
    render(<UserSelect/>);
    const linkElement = screen.getByText(/Cuenta personal para invertir en proyectos TI./i);
    expect(linkElement).toBeInTheDocument();
  });