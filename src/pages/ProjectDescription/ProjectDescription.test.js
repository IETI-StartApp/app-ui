import React from 'react';
import {render, screen} from '@testing-library/react';
import {ProjectDescription} from './ProjectDescription'
const object = {
  state:
      {
        country: "CO",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lacus laoreet.",
        finance: {
          value: 10000,
          investorNumber: 1,
          valuation: 50000,
          minimumInvestment: 1000000,
          startDate: "2019-02-16T05:00:00.000",
          endDate: "2019-02-17T05:00:00.000Z"
        },
        image: "https://images.unsplash.com/photo-1619537765439-1469ac26014a?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80",
        name: "Beach & talk",
        user: {
          firstName: "jose",
          lastName: "Gomez",
          email: "jose@gmail.com",
          identification: 1019151562,
          role: "ENTREPRENEUR",
          description: "esto es una prueba",
          projects: []
        },
        video: "https://youtu.be/hCrJTLdmkHo"
      }
}
test('renders learn react link', () => {
    render(<ProjectDescription location={object}
    />);
    const linkElement = screen.getByText(/Beach & talk/i);
    expect(linkElement).toBeInTheDocument();
});
test('renders learn react link', () => {
    render(<ProjectDescription location={object}/>);
    const linkElement = screen.getByText(/jose Gomez/i);
    expect(linkElement).toBeInTheDocument();
});

test('renders learn react link', () => {
    render(<ProjectDescription location={object}/>);
    const linkElement = screen.getByText(/Lorem ipsum/i);
    expect(linkElement).toBeInTheDocument();
});

test('renders learn react link', () => {
    render(<ProjectDescription location={object}/>);
    const linkElement = screen.getByText(/10,000.00/i);
    expect(linkElement).toBeInTheDocument();
});
test('renders learn react link', () => {
    render(<ProjectDescription location={object}/>);
    const linkElement = screen.getByText(/2019-02-16T05:00:00.000/i);
    expect(linkElement).toBeInTheDocument();
});
test('renders learn react link', () => {
    render(<ProjectDescription location={object}/>);
    const linkElement = screen.getByText(/Inversionistas/i);
    expect(linkElement).toBeInTheDocument();
});
test('renders learn react link', () => {
    render(<ProjectDescription location={object}/>);
    const linkElement = screen.getByText(/50,000.00/i);
    expect(linkElement).toBeInTheDocument();
});
test('renders learn react link', () => {
    render(<ProjectDescription location={object}/>);
    const linkElement = screen.getByText(/Valoración/i);
    expect(linkElement).toBeInTheDocument();
});
test('renders learn react link', () => {
    render(<ProjectDescription location={object}/>);
    const linkElement = screen.getByText(/50,000.00/i);
    expect(linkElement).toBeInTheDocument();
});
test('renders learn react link', () => {
    render(<ProjectDescription location={object}/>);
    const linkElement = screen.getByText(/Inversión minima/i);
    expect(linkElement).toBeInTheDocument();
});
test('renders learn react link', () => {
    render(<ProjectDescription location={object}/>);
    const linkElement = screen.getByText(/2019-02-17T05:00:00.000Z/i);
    expect(linkElement).toBeInTheDocument();
});
test('renders learn react link', () => {
    render(<ProjectDescription location={object}/>);
    const linkElement = screen.getByText(/Días faltantes/i);
    expect(linkElement).toBeInTheDocument();
});

test('renders learn react link', () => {
    render(<ProjectDescription location={object}/>);
    const linkElement = screen.getByText(/Fecha inicio/i);
    expect(linkElement).toBeInTheDocument();
});
test('renders learn react link', () => {
    render(<ProjectDescription location={object}/>);
    const linkElement = screen.getByText(/Fecha Final/i);
    expect(linkElement).toBeInTheDocument();
});
