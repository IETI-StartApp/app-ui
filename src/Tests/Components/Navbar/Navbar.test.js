import { mount } from "enzyme";
import Navbar from "../../../components/Navbar";
import {fireEvent, render, screen} from "@testing-library/react";
import React from "react"; // mount instead of `shallow` here

it('should render', () => {
    const component = mount(<Navbar handleDrawerToggle={()=>{}} />); // `mount` here as well
    const wrapper = component.find('myClassName');
    expect(wrapper.length).toBe(0);
});
test("Click1", () => {
    const {container} = render(<Navbar handleDrawerToggle={()=>{}} test />);
    const handleClick = jest.fn();
    fireEvent.click(screen.getByText(/Agregar proyecto/i))
    expect(handleClick).toHaveBeenCalledTimes(0)
});
test("Click2", () => {
    const {container} = render(<Navbar handleDrawerToggle={()=>{}} test/>);
    const handleClick = jest.fn();
    fireEvent.click(screen.getByText(/Ver mis proyectos/i))
    expect(handleClick).toHaveBeenCalledTimes(0)
});
test("Click3", () => {
    const {container} = render(<Navbar handleDrawerToggle={()=>{}} test/>);
    const handleClick = jest.fn();
    fireEvent.click(screen.getByText(/Ver todos los proyectos/i))
    expect(handleClick).toHaveBeenCalledTimes(0)
});


