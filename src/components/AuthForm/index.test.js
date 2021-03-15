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
    customRender(<AuthForm functions={()=>{}}/>,contextValues)
    const linkElement = screen.getAllByText(/Email/i);
    expect(true)
});
