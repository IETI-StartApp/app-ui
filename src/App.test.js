import {mount} from "enzyme";
import React from "react";
import App from "./App";

it('should render', () => {
    const component = mount(<App />); // `mount` here as well
    const wrapper = component.find('myClassName');
    expect(wrapper.length).toBe(0);
});
