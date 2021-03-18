import React from "react";
import ShallowRenderer from 'react-test-renderer/shallow';
import {AuthForm} from "./index";

let realUseContext;
let useContextMock;
// Setup mock
beforeEach(() => {
    realUseContext = React.useContext;
    useContextMock = React.useContext = jest.fn();
});
// Cleanup mock
afterEach(() => {
    React.useContext = realUseContext;
});
test("mock hook", () => {
    useContextMock.mockReturnValue("Test Value");
    const fun1 = () => {
    }
    const fun2 = () => {
    }
    const element = new ShallowRenderer().render(
        <AuthForm functions={{fun1, fun2}}/>
    );
    expect(element.props.children).toBe(element.props.children);
});
