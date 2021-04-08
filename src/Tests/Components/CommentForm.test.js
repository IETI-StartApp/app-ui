import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { render, screen } from '@testing-library/react';
import { Comment } from '../../components/Comment/CommentForm';


describe('Testing register page', () => {
    const wrapper = shallow(<Comment/>);                                 
    test('should render register page', () => {
         expect(wrapper).toMatchSnapshot();   
    })
    
})

test('renders learn react link', () => {
    render(<Comment/>);
    const linkElement = screen.getByText(/Califica el proyecto y deja un comentario/i);
    expect(linkElement).toBeInTheDocument();
  });

  test('renders learn react link', () => {
    render(<Comment/>);
    const linkElement = screen.getByText(/Tus comentarios ayudaran a la mejora del proyecto!/i);
    expect(linkElement).toBeInTheDocument();
  });
  test('renders learn react link', () => {
    render(<Comment/>);
    const linkElement = screen.getByText(/¡Comentar!/i);
    expect(linkElement).toBeInTheDocument();
  });