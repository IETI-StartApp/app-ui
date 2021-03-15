import React from 'react';
import { render, screen } from '@testing-library/react';
import {AuthForm} from "./index";
import {AuthContext, contextValues} from "../../authServices/Auth";

const customRender = (ui, { providerProps, ...renderOptions }) => {
    return render(
        <AuthContext.Provider value={providerProps}>{ui}</AuthContext.Provider>,
        renderOptions
    )
}

test('renders learn react link', () => {
    console.log(contextValues)
    const fun1 = () => {
    }
    const fun2 = () => {
    }
    customRender(<AuthForm functions={{fun1,fun2}}/>,contextValues)
    const linkElement = screen.getAllByText(/Email/i);
    expect(true)
});
