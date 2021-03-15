import React from "react";
import ShallowRenderer from 'react-test-renderer/shallow';
import Register from "./index";

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
    const googleFunction = ()=>{}
    useContextMock.mockReturnValue("Test Value");
    const element = new ShallowRenderer().render(
        <Register auth={{googleFunction}}/>
    );
    expect(element.props.children).toBe(element.props.children);
});
