import { act } from 'react-dom/test-utils';
import {LandingPage} from "./index";
import {mount} from "enzyme";

const waitForComponentToPaint = async (wrapper) => {
    await act(async () => {
        await new Promise(resolve => setTimeout(resolve, 0));
        wrapper.update();
    });
};

it('should do something', () => {
    const wrapper  = mount(<LandingPage />);
    waitForComponentToPaint(wrapper);
    expect(wrapper);
})
