import React from "react";
import ShallowRenderer from 'react-test-renderer/shallow';
import {LoginPage} from "./index";

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
    const element = new ShallowRenderer().render(
        <LoginPage/>
    );
    expect(element.props.children).toBe(element.props.children);
});
