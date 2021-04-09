import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { render, screen } from '@testing-library/react';
import { Comment } from '../../components/Comment/CommentForm';
import { SlideBar } from '../../components/SlideBar/SlideBar';

describe('Testing comment page', () => {
    const wrapper = shallow(<Comment />);
    const wrapper2 = shallow(<SlideBar />);
    test('should render comment page', () => {
        expect(wrapper).toMatchSnapshot();
    });
    test('should render comment page', () => {
        expect(wrapper2).toMatchSnapshot();
    });

    test('deberia mostrar el comentar', () => {
        const btn = wrapper.find('ButtonDesign')
    });
    test('deberia mostrar el comentar', () => {
        const mockedEvent = { target: {}, preventDefault: () => { } }
        const spy = jest.spyOn(wrapper.instance(), 'onSubmit')
        wrapper.find('form').simulate('submit', mockedEvent)
        expect(spy).toHaveBeenCalled()
    });
    test('renders learn react link', () => {
        render(<Comment />);
        const linkElement = screen.getByText(/Califica el proyecto y deja un comentario/i);
        expect(linkElement).toBeInTheDocument();
    });

    test('renders learn react link', () => {
        render(<Comment />);
        const linkElement = screen.getByText(/Tus comentarios ayudaran a la mejora del proyecto!/i);
        expect(linkElement).toBeInTheDocument();
    });
    test('renders learn react link', () => {
        render(<Comment />);
        const linkElement = screen.getByText(/¡Comentar!/i);
        expect(linkElement).toBeInTheDocument();
    });
})