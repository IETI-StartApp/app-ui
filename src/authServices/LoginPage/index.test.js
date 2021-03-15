import React from "react";
import {LoginPage} from "./index";
import {mount} from "enzyme";

it('should render', () => {
    const component = mount(<LoginPage />); // `mount` here as well
    const wrapper = component.find('myClassName');
    expect(wrapper.length).toBe(0);
});

