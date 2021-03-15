import { mount } from "enzyme";
import Register from "./index"; // mount instead of `shallow` here

it('should render', () => {
    const component = mount(<Register />); // `mount` here as well
    const wrapper = component.find('myClassName');
    expect(wrapper.length).toBe(0);
});
